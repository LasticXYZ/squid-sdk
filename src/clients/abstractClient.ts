import { BaseEvent, GraphLike, GraphQuery, ObjProp, QueryProps } from '../types'
// Collection, Token
interface AbstractClient<C = BaseEvent> {
  collectionById(id: string, fields?: ObjProp<C>): GraphQuery
  collectionList(fields?: ObjProp<C>, options?: QueryProps<C>): GraphQuery
  eventById(id: string, fields?: ObjProp<BaseEvent>): GraphQuery
  eventAllSaleInitialized(): GraphQuery
  fetch<D>(query: GraphQuery): Promise<GraphLike<D>>
}

export default AbstractClient
