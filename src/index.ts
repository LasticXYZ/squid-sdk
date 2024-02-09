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

import getClient from './clients/factory'
import SquidClient from './clients/SquidClient'
import { getUrl } from './indexers'

export { extendFields } from './clients/defaults'
export { fetchQuery, graphFetch } from './indexers'
export * from './rest'

// eslint-disable-next-line unicorn/prefer-export-from
export { getClient, getUrl, SquidClient }

export * from './types'