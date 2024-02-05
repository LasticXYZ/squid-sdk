/*
 * --------------------------------------------------------------------------------
 * This file is part of the LasticXYZ project.
 * 
 * Originally based on code from kodadot/uniquery (link: https://github.com/kodadot/uniquery).
 * Adapted and modified by LasticXYZ. Link to repository: https://github.com/LasticXYZ/squid-sdk
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation version 3.
 * --------------------------------------------------------------------------------
 */

import {
  BaseEvent,
  Fields,
  ObjProp,
  QueryEntity,
  QueryOptions,
  QueryProps,
} from '../types'

export const defaultField: ObjProp<BaseEvent> = [
  'id',
  'blockNumber',
  'timestamp',
]

export const DEFAULT_LIMIT = 200
// todo: add default orderBy
export const defaultQueryOptions: QueryOptions = {
  limit: DEFAULT_LIMIT,
}

// function hasMetaField(field: any): boolean {
//   return typeof field === 'string' && field === 'meta'
// }

export function extendFields<T extends BaseEvent>(
  fields: ObjProp<T>,
): ObjProp<T> {
  const set = new Set([...defaultField, ...fields])
  return [...set]
}


export function wrapSubqueryList<T>(fields: Fields<T>): [{ nodes: Fields<T> }] {
  return [{ nodes: fields }]
}


export function getFields<T>(cls: new () => T): string[] {
  return Object.keys(new cls());
}

export type FieldList = { [key: string]: string | FieldList };

export function getRecursiveFields<T>(Cls: new () => T): FieldList {
    const instance = new Cls();
  
    const fields = Object.keys(instance).reduce((acc, key) => {
        // Directly get the value of the property
        const propertyValue = instance[key];
  
        // Determine if the propertyValue is an instance of a class (and not a primitive value)
        // This check is simplistic and may need refinement for complex cases
        if (Array.isArray(propertyValue) && propertyValue.length > 0) {
          // Assuming all elements in the array are of the same type, 
          // take the first element to determine the structure.
          // This is a simplification; in real scenarios, you might need to check all elements or adjust based on your data model.
          const firstElement = propertyValue[0];
          if (typeof firstElement === 'object' && firstElement !== null) {
              const ElementClass = firstElement.constructor;
              if (ElementClass !== Object) {
                  acc[key] = getRecursiveFields(ElementClass as new () => unknown);
              } else {
                  acc[key] = 'Array<Object>';
              }
          } else {
              // Handle arrays of primitive types
              acc[key] = 'Array<Primitive>';
          }
      } 
        else if (propertyValue !== null && typeof propertyValue === 'object') {
            // Attempt to get the constructor of the nested object
            const NestedClass = propertyValue.constructor;
            // Check if NestedClass is not the base Object class
            if (NestedClass !== Object) {
                acc[key] = getRecursiveFields(NestedClass as new () => unknown);
            } else {
                // Handle as a primitive value if NestedClass is the base Object class
                acc[key] = key;
            }
        } else {
            acc[key] = key;
        }
        return acc;
    }, {} as FieldList);
  
    return fields;
}




export function optionToQuery(
  options: QueryOptions,
  injectDefault = true,
): string {
  const final = injectDefault ? ensureOptions(options) : options
  let query = ''
  if (final.limit) {
    query += `limit: ${final.limit}`
  }
  if (final.offset) {
    query += `, offset: ${final.offset}`
  }
  if (final.orderBy) {
    query += `, orderBy: ${final.orderBy}`
  }
  return query
}

export function ensureOptions(options?: QueryOptions): QueryOptions {
  const queryOptions = options ?? {}
  return {
    ...defaultQueryOptions,
    ...queryOptions,
    limit: Math.min(
      queryOptions.limit ?? DEFAULT_LIMIT,
      defaultQueryOptions.limit,
    ),
  }
}

type Burned = '' | `burned_eq: ${false}`
export function includeBurned<T = unknown>(options?: QueryProps<T>): Burned {
  if (options && options.burned) {
    return ''
  }

  return 'burned_eq: false'
}

export function strOf<T>(value: T): string {
  return `"${value}"`
}

type Alias = `${QueryEntity}: ${string}`
export const entityMap: Record<QueryEntity, Alias> = {
  collection: 'collection: collectionEntityById',
  collections: 'collections: collectionEntities',
  collectionCount: 'collectionCount: collectionEntitiesConnection',
  event: 'event: eventEntityById',
  events: 'events: events',
  eventCount: 'eventCount: eventsConnection',
  item: 'item: nftEntityById',
  items: 'items: nftEntities',
  itemCount: 'itemCount: nftEntitiesConnection',
}

type GraphEntity = 'collection' | 'item' | 'event'
export const realEntityName: Record<GraphEntity, string> = {
  collection: 'CollectionEntity',
  item: 'NFTEntity',
  event: 'Event',
}

function addWhere(whereType: string, whereValue?: any) {
  if (whereValue) {
    return {
      where: {
        type: whereType,
        value: whereValue,
      },
    }
  }

  return {}
}

type OperationName = `${GraphEntity}Count`
export function genericCountQuery(entity: GraphEntity, whereValue?: any) {
  const name = entity + 'Count' as OperationName
  const operation = entityMap[name]
  const types = realEntityName[entity]
  const whereType = `${types}WhereInput`
  const where = addWhere(whereType, whereValue)
  return {
    operation,
    fields: ['totalCount'],
    variables: {
      orderBy: { value: 'id_ASC', type: `[${types}OrderByInput!]!` },
      ...where,
    },
    whereType: `${types}WhereInput`,
  }
}
