import { $fetch } from 'ofetch'
import { getUrl } from '../indexers'
import { getOptions } from '../indexers/utils'
import build from '../queryBuilder'
import {
  BaseEvent,
  GraphLike,
  GraphQuery,
  KeyOf,
  ObjProp,
  QueryProps,
} from '../types'

import {
  defaultField,
  genericCountQuery,
  getFields,
  includeBurned,
  optionToQuery,
} from './defaults'

class SquidClient {
  constructor() {
  }

  //collectionById(id: string, fields?: ObjProp<SquidCollection>): GraphQuery {
  //   const toQuery = getFields(fields)
  //   return build('collection: collectionEntityById', toQuery, {
  //     id: { type: 'String', required: true, value: id, name: 'id' },
  //   })
  // }

  eventAllSaleInitialized(): GraphQuery {
    return build('event: saleInitializeds', defaultField, {})
  }

  fetch<D>(query: GraphQuery): Promise<GraphLike<D>> {
    const baseURL = getUrl()
    const opts = getOptions({ query, baseURL, path: '' })
    return $fetch<GraphLike<D>>(baseURL, opts)
  }
}

export default SquidClient
