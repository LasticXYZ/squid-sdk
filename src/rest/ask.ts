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

import { $fetch } from 'ofetch'
import { QueryProps } from '../types'
import { getOptions } from '../indexers/utils'
import { pathToRequest } from './path'
import { GraphLike } from './types'

const GRAPHQL_PATH = '/graphql'

function askFor<T>(
  rpc_name: string,
  path: string,
  options?: QueryProps<T>,
): Promise<GraphLike<T>> {
  const request = pathToRequest(rpc_name, path, options)
  const opts = getOptions(request)
  return $fetch<GraphLike<T>>(GRAPHQL_PATH, opts)
}

export { askFor as ask }
