export type KeyOf<T> = keyof T
export type ObjProp<T> = Array<KeyOf<T>>
// FieldList is a type that can is array containing either a string or an object that contains a string array
export type FieldList = Array<string>

export type Fields<T> = FieldList | ObjProp<T>
export type KeyValue = {
  [k: string]: any
}

type GraphType = any

export type StrictKeyValue = {
  [k: string]: any | {
    value: any
    required?: boolean
    type?: GraphType
    list?: boolean
    name?: string
  }
}

export type GraphQuery = {
  query: string
  variables: any
}

export type QueryOptions = {
  limit?: number
  offset?: number
  orderBy?: string
}

export type GraphLike<T> = { data: { event?: T, call?: T} }

// NOW: client.eventListByNftId('123', ['id', 'name'], { limit: 10 })
// NEW: client.eventListByNftId('123', { fields: ['id', 'name'], limit: 10 })
export type QueryProps<T> = QueryOptions & {
  fields?: ObjProp<T>
  burned?: boolean
}

export type Or<A, B> = A | B
export type And<A, B> = A & B

export type BaseEvent = {
  id: string
  blockNumber: bigint
  timestamp: Date
}

export type FilterType = 'blockNumber' | 'updatedAt' | 'price' | 'sn'
export type QueryEntity =
  | 'collection'
  | 'collections'
  | 'event'
  | 'events'
  | 'item'
  | 'items'
  | 'collectionCount'
  | 'itemCount'
  | 'eventCount'
export type FilterOrderDirection = 'ASC' | 'DESC'
export type FilterOrderType = [FilterOrderDirection, FilterOrderDirection?]
export type FilterBuilder = [FilterType, FilterOrderType?]
export type FilterMappingFn = (
  filter: FilterType,
  direction: FilterOrderDirection,
) => string

export * from './broker'
