import { $URL, withoutLeadingSlash } from 'ufo'
import getClient from '../clients/factory'
import { GraphQuery, QueryProps } from '../types'
import { getUrl } from '../indexers'
import { ClientCall, GraphRequest } from './types'

const pathMap: Record<string, ClientCall> = {
  collection: 'collectionById',
}

export const parsePath = (pathname: string): string[] => {
  return withoutLeadingSlash(pathname).split('/')
}

const hasCall = (call: string | undefined): boolean => call in pathMap
const getCall = (call: string): ClientCall => pathMap[call]

const urlOf = (path: string): $URL => new $URL(path)
const makeQuery = (
  call: string,
  id: string,
  options?: QueryProps<any>,
): GraphQuery => {
  const client = getClient()
  const method = getCall(call)
  const fn: any | undefined = client[method]
  if (fn === undefined || !(typeof fn === 'function')) {
    throw new ReferenceError(`[UNIQUERY::REST] Unable to make call: ${call}`)
  }

  return fn(id, options)
}

export function pathToRequest(
  path: string,
  options?: QueryProps<any>,
): GraphRequest {
  const { pathname } = urlOf(path) // query: options
  const [chain, call, id] = parsePath(pathname)
  if (!hasCall(call)) {
    throw new ReferenceError(`[UNIQUERY::REST] Invalid path: ${path}`)
  }

  const baseURL = getUrl()
  const graphQuery = makeQuery(call, id, options)

  return { baseURL, query: graphQuery, path }
  // const [chain, call, param] = path.split('/').filter(Boolean)
}
