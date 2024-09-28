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
import { GraphLike, GraphQuery } from '../types'
import { getOptions } from './utils'

const LocalhostSquidEndpoint = 'http://localhost:4350/graphql'
const RococoSquidEndpoint = 'https://lastic.squids.live/rococo-coretime/graphql'
const KusamaSquidEndpoint = 'https://lastic.squids.live/kusama-coretime/graphql'
const PolkadotSquidEndpoint = 'https://lastic.squids.live/polkadot-coretime/graphql'

function getUrl(rpcName: string): string {
  if (rpcName === 'dev') {
    return LocalhostSquidEndpoint
  }
  if (rpcName === 'rococo') {
    return RococoSquidEndpoint
  }
  if (rpcName === 'kusama') {
    return KusamaSquidEndpoint
  }
  if (rpcName === 'polkadot') {
    return PolkadotSquidEndpoint
  }
  return KusamaSquidEndpoint
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
  const baseURL = getUrl("rococo")
  return graphFetch<D>(baseURL, query)
}

export {
  getUrl
}