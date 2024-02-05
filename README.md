# GraphQl query builder

This repository is part of the LasticXYZ project. Originally based on code from [kodadot/uniquery](https://github.com/kodadot/uniquery). Adapted and modified by LasticXYZ. Shoutout to [@vikiival](https://github.com/vikiival) for creating the original code.

## How to use

```
import { getClient, SaleInitializedEvent } from '@lasticxyz/squid-sdk'

const client = getClient()
const query = client.eventAllSaleInitialized()
const result: GraphLike<SaleInitializedEvent[]> = await client.fetch(query)

```
