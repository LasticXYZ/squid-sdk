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

import { FetchOptions } from 'ofetch'
import { GraphLike, GraphRequest } from '../rest/types'

export const getOptions = ({
  baseURL,
  query,
}: GraphRequest): FetchOptions<'json'> => ({
  baseURL,
  method: 'POST',
  body: query,
})

export const uwrapRequest = <T>(req: GraphLike<T>): T => {
  const data = (req as any).data

  if (data) {
    return data as T
  }

  return req as T
}
