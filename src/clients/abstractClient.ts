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
