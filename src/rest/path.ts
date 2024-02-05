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
  const [call, id] = parsePath(pathname)
  if (!hasCall(call)) {
    throw new ReferenceError(`[UNIQUERY::REST] Invalid path: ${path}`)
  }

  const baseURL = getUrl()
  const graphQuery = makeQuery(call, id, options)

  return { baseURL, query: graphQuery, path }
  // const [chain, call, param] = path.split('/').filter(Boolean)
}
