# GraphQl query builder

This repository is inspired by [kodadot/uniquery](https://github.com/kodadot/uniquery) repository. Shoutout to [@vikiival](https://github.com/vikiival).

## How to use

```
import { getClient, SaleInitializedEvent } from '@lasticxyz/squid-sdk'

const client = getClient()
const query = client.eventAllSaleInitialized()
const result: GraphLike<SaleInitializedEvent[]> = await client.fetch(query)

```