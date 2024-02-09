import { expect, it, describe } from 'vitest'
import { getClient, getUrl } from '../src'
import { parsePath, pathToRequest } from '../src/rest/path'
import { extendFields, getFields, getRecursiveFields, includeBurned } from '../src/clients/defaults'
import { 
    BaseEvent,
    GraphLike,
    SaleInitializedEvent,
    PurchasedEvent,
    SalesStartedEvent,
    RenewableEvent,
    PartitionedEvent,
    CoreAssignedEvent
} from '../src'
import { formatFields } from '../src/queryBuilder'


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
    it('should return extended fields', () => {
      const fields = getFields(SaleInitializedEvent)
      expect(fields).toStrictEqual(
        [
          'id',
          'blockNumber',
          'timestamp',
          'extrinsicHash',
          'saleStart',
          'leadinLength',
          'startPrice',
          'regularPrice',
          'regionBegin',
          'regionEnd',
          'idealCoresSold',
          'coresOffered'
        ]
      )
    })

    it('should return recursive fields 2', () => {
      const fields = getRecursiveFields(CoreAssignedEvent)
      const queryStr = formatFields(fields)
      expect(queryStr).toStrictEqual(
          "id blockNumber timestamp core when assignment { assignment { kind value } value }"
      )
    })

  })

  describe('test2 eventAllSaleInitialized', () => {
    it('should fetch data successfully', async () => {
      const client = getClient();
      const query = {
        query: `query {
          event: purchaseds {
            blockNumber
            duration
            id
            price
            regionId {
              begin
              core
              mask
            }
            timestamp
          }
        }`,
        variables: {}
      };
  
      //const result = await client.fetch(query);
      //console.log(JSON.stringify(result, null, 2));

    });
  });

  describe('test eventAllSaleInitialized', () => {
    it('should fetch data successfully', async () => { // Marked as async
      const client = getClient()
      const query = client.eventAllSaleInitialized()

      // Assuming you're testing the fetch operation's result
      const result: GraphLike<SaleInitializedEvent[]> = await client.fetch(query)
      //console.log(result.data.event);

      expect(result).toHaveProperty('data.event')
    })
  })


  describe('SquidClient Event Queries', () => {
    const client = getClient();

    const queryEventFunctions = [
      // { func: client.eventAllHistoryInitialized, type: 'HistoryInitializedEvent'},
      // { func: client.eventAllSaleInitialized, type: 'SaleInitializedEvent' },
      // { func: client.eventAllSalesStarted, type: 'SalesStartedEvent' },
      // { func: client.eventAllPurchased, type: 'PurchasedEvent' },
      // { func: client.eventAllRenewable, type: 'RenewableEvent' },
      // { func: client.eventAllRenewed, type: 'RenewedEvent' },
      // { func: client.eventAllTransferred, type: 'TransferredEvent' },
      // { func: client.eventAllPartitioned, type: 'PartitionedEvent' },
      // { func: client.eventAllInterlaced, type: 'InterlacedEvent' },
      // { func: client.eventAllAssigned, type: 'AssignedEvent' },
      // { func: client.eventAllPooled, type: 'PooledEvent' },
      // { func: client.eventAllClaimsReady, type: 'eventAllClaimsReady' },
      // { func: client.eventAllAllowedRenewalDropped, type: 'eventAllAllowedRenewalDropped' },
      // { func: client.eventAllCoreAssigned, type: 'eventAllCoreAssigned' },
      // { func: client.eventAllHistoryDropped, type: 'eventAllHistoryDropped' },
      // { func: client.eventAllContributionDropped, type: 'eventAllContributionDropped'},
      // { func: client.eventAllRegionDropped, type: 'eventAllRegionDropped' },
      // { func: client.eventAllCreditPurchased, type: 'eventAllCreditPurchased' },
      // { func: client.eventAllRevenueClaimItem, type: 'eventAllRevenueClaimItem' },
      // { func: client.eventAllRevenueClaimBegun, type: 'eventAllRevenueClaimBegun' },
      // { func: client.eventAllLeaseEnding, type: 'eventAllLeaseEnding' },
      // { func: client.eventAllLeased, type: 'eventAllLeased' },
      // { func: client.eventAllReservationCancelled, type: 'eventAllReservationCancelled' },
      // { func: client.eventAllReservationMade, type: 'eventAllReservationMade' },
      // { func: client.eventAllCoreCountChanged, type: 'eventAllCoreCountChanged' },
      // { func: client.eventAllCoreCountRequested, type: 'eventAllCoreCountRequested' },
      { func: client.eventAllRevenueClaimPaid, type: 'eventAllRevenueClaimPaid' },

    ];
  

    queryEventFunctions.forEach(({ func, type }) => {
      it(`should fetch data successfully for ${type}`, async () => {
        const query = func.call(client); // Call the function on the client instance
        const result = await client.fetch(query); // Fetch the data
                
        expect(result).toHaveProperty('data.event'); // General assertion; adjust as needed
      });
    });
  });

  describe('SquidClient Call Queries', () => {
    const client = getClient();

    const queryCallFunctions = [
      // { func: client.callAllConfigure, type: 'callAllConfigure' },
      // { func: client.callAllReserve, type: 'callAllReserve' },
      // { func: client.callAllUnreserve, type: 'callAllUnreserve' },
      // { func: client.callAllSetLease, type: 'callAllSetLease' },
      // { func: client.callAllStartSales, type: 'callAllStartSales' },
      // { func: client.callAllPurchase, type: 'callAllPurchase' },
      // { func: client.callAllRenew, type: 'callAllRenew' },
      // { func: client.callAllTransfer, type: 'callAllTransfer' },
      // { func: client.callAllPartition, type: 'callAllPartition' },
      // { func: client.callAllInterlace, type: 'callAllInterlace' },
      // { func: client.callAllAssign, type: 'callAllAssign' },
      // { func: client.callAllPool, type: 'callAllPool' },
      // { func: client.callAllClaimRevenue, type: 'callAllClaimRevenue' },
      // { func: client.callAllPurchaseCredit, type: 'callAllPurchaseCredit' },
      // { func: client.callAllDropRegion, type: 'callAllDropRegion' },
      // { func: client.callAllDropContribution, type: 'callAllDropContribution' },
      // { func: client.callAllDropHistory, type: 'callAllDropHistory' },
      // { func: client.callAllDropRenewal, type: 'callAllDropRenewal' },
      { func: client.callAllRequestCoreCount, type: 'callAllRequestCoreCount' },
    ];

    queryCallFunctions.forEach(({ func, type }) => {
      it(`should fetch data successfully for ${type}`, async () => {
        const query = func.call(client); // Call the function on the client instance
        const result = await client.fetch(query); // Fetch the data
        
        console.log(result.data.call); // Optional: Log for debugging
        
        expect(result).toHaveProperty('data.call'); // General assertion; adjust as needed
      });
    });
  });
  
})