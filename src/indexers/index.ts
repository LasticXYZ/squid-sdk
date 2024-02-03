import { $fetch } from 'ofetch'
import { GraphLike, GraphQuery } from '../types'
import { getOptions } from './utils'

const SquidEndpoint = 'https://squid.subsquid.io/rococo-coretime/v/v1/graphql'

function getUrl(): string {
  return SquidEndpoint
}

export function graphFetch<D>(
  baseURL: string,
  query: GraphQuery,
): Promise<GraphLike<D>> {
  const opts = getOptions({ query, baseURL, path: '' })
  return $fetch<GraphLike<D>>(baseURL, opts)
}

export function fetchQuery<D>(
  query: GraphQuery,
): Promise<GraphLike<D>> {
  const baseURL = getUrl()
  return graphFetch<D>(baseURL, query)
}

export {
  getUrl
}