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

type FieldList = string | { [key: string]: FieldList };

export function getRecursiveFields<T>(cls: new () => T): FieldList {
  const instance = new cls();
  const fields = Object.keys(instance).reduce((acc, key) => {
    const value = instance[key];
    if (value !== null && typeof value === 'object') {
      // If the value is an object (and not null), recurse.
      // Assuming all nested objects are class instances or null for simplicity.
      acc[key] = getRecursiveFields(() => value);
    } else {
      acc[key] = key; // Use the key name directly for non-object fields.
    }
    return acc;
  }, {} as Record<string, FieldList>);
  
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
