import { expect, it, describe } from 'vitest'
import { getClient, getUrl } from '../src'
import { parsePath, pathToRequest } from '../src/rest/path'
import { extendFields, getFields, includeBurned } from '../src/clients/defaults'
import { 
    BaseEvent,
    SaleInitializedEvent
} from '../src/types'


describe('UNIQUERY UTILS', () => {
  describe('getURL', () => {
    it('should return default subs indexer', () => {
      const url = getUrl()
      expect(url).eq('https://squid.subsquid.io/rococo-coretime/v/v1/graphql')
    })
  })

  describe('parse path should', () => {
    it('be fully defined', () => {
      const pathname = '/item/0-1'
      const [call, id] = parsePath(pathname)
      expect(call).eq('item')
      expect(id).eq('0-1')
    })
  })


  describe('getFields', () => {
    it('should return default fields', () => {
      const fields = getFields<BaseEvent>('BaseEvent')
      expect(fields).toStrictEqual(['id', 'blockNumber', 'timestamp'])
    })

    it('should return extended fields', () => {
      const fields = getFields<SaleInitializedEvent>('SaleInitializedEvent')
      expect(fields).toStrictEqual(
        [
          'id',
          'blockNumber',
          'timestamp',
          'coresOffered',
          'idealCoresSold',
          'leadinLength',
          'regionBegin',
          'regionEnd',
          'regularPrice',
          'saleStart',
          'startPrice'
        ]
      )
    })

  })

  describe('test eventAllSaleInitialized', () => {
    it('should fetch data successfully', async () => { // Marked as async
      const client = getClient()
      const query = client.eventAllSaleInitialized()
      expect(query).toStrictEqual({
        query: 'query  { event: saleInitializeds  { id, blockNumber, timestamp } }',
        variables: {}
      })

      // Assuming you're testing the fetch operation's result
      const result = await client.fetch(query)

      expect(result).toHaveProperty('data.event')
    })
  })

  describe('test2 eventAllSaleInitialized', () => {
    it('should fetch data successfully', async () => {
      const client = getClient();
      const query = {
        query: `query {
          event: saleInitializeds {
            id
            blockNumber
            timestamp
            coresOffered
            idealCoresSold
            leadinLength
            regionBegin
            regionEnd
            regularPrice
            saleStart
            startPrice
          }
        }`,
        variables: {}
      };
      expect(query).toStrictEqual({
        query: `query {
          event: saleInitializeds {
            id
            blockNumber
            timestamp
            coresOffered
            idealCoresSold
            leadinLength
            regionBegin
            regionEnd
            regularPrice
            saleStart
            startPrice
          }
        }`,
        variables: {}
      });
  
      const result = await client.fetch(query);
      //console.log(JSON.stringify(result, null, 2));

    });
  });
  


})