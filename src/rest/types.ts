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

import AbstractClient from '../clients/abstractClient'
import { GraphQuery, Or } from '../types'
export { GraphLike } from '../types'

export type GraphRequest = {
  baseURL: string
  query: GraphQuery
  path: string
}

export type ClientCall = keyof AbstractClient<any>

export type MayString = Or<string, undefined>
