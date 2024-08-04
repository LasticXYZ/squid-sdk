import { expect, it, describe } from 'vitest'
import { parsePath } from '../src/rest/path'
import { getFields, getRecursiveFieldstoArr } from '../src/clients/defaults'
import { 
    GraphLike,
    SaleInitializedEvent,
    CoreAssignedEvent,
    getClient, getUrl 
} from '../src'
import { advancedBuild2 } from '../src/queryBuilder'


describe('UNIQUERY UTILS', () => {
  describe('getURL', () => {
    it('should return default subs indexer', () => {
      const url = getUrl("rococo")
      expect(url).eq('https://lastic.squids.live/rococo-coretime/graphql')
      const url2 = getUrl("kusama")
      expect(url2).eq('https://lastic.squids.live/kusama-coretime/graphql')
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
  })

  

  describe('test eventAllSaleInitialized', () => {
    it('should fetch data successfully', async () => { // Marked as async
      const client = getClient()
      const query = client.eventAllSaleInitialized()

      // Assuming you're testing the fetch operation's result
      const result: GraphLike<SaleInitializedEvent[]> = await client.fetch("rococo", query)

      expect(result).toHaveProperty('data.event')
    })
  })

  describe('test whopurchased event', () => {
    it('should fetch data successfully', async () => { // Marked as async
      const client = getClient()
      const query = client.eventCorePurchased(54)
      // Assuming you're testing the fetch operation's result
      const result = await client.fetch("rococo", query)

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
      // { func: client.eventAllRevenueClaimPaid, type: 'eventAllRevenueClaimPaid' },
      // { func: client.eventAllNewMultisig, type: 'NewMultisigEvent' },
      // { func: client.eventAllMultisigApproval, type: 'MultisigApprovalEvent' },
      // { func: client.eventAllMultisigExecuted, type: 'MultisigExecutedEvent' },
      { func: client.eventAllMultisigCancelled, type: 'MultisigCancelledEvent' },
    ];
  

    queryEventFunctions.forEach(({ func, type }) => {
      it(`should fetch data successfully for ${type}`, async () => {
        const query = func.call(client); // Call the function on the client instance
        const result = await client.fetch("rococo", query); // Fetch the data
                
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
        const result = await client.fetch("rococo", query); // Fetch the data
                
        expect(result).toHaveProperty('data.call'); // General assertion; adjust as needed
      });
    });
  });


  describe("Core Owners Query", () => {
    const client = getClient();
    it("should fetch data successfully", async () => {
      const query = client.eventAllCoreOwner(126_859, 127_174);
      const result = await client.fetch("rococo", query);
      expect(result).toHaveProperty('data.event');
    });

    it("should fetch data by specific owner successfully", async () => {
      const query = client.eventWhoCoreOwner("5GxBaAJmPQAen737CXsHoWX2WpsarY2awq26cLmpdN1K2Shc", 126_690, 127_950);
      const result = await client.fetch("rococo", query);
      expect(result).toHaveProperty('data.event');
    });

    it("should fetch data of a specific region", async () => {
      const query = client.eventSpecificRegionCoreOwner(78, 126_859, "0xffffffffffffffffffff");
      const result = await client.fetch("rococo", query);
      expect(result).toHaveProperty('data.event');
    });

    it("should fetch data of owned and assigned core owner", async () => {
      const query = client.eventOwnedAndAssignedCoreOwner("5GxBaAJmPQAen737CXsHoWX2WpsarY2awq26cLmpdN1K2Shc");
      const result = await client.fetch("rococo", query);
      expect(result).toHaveProperty('data.event');
    });

    it("should fetch data of owned and pooled core owner", async () => {
      const query = client.eventOwnedAndPooledCoreOwner("5HNJjkjo3KGA3R1DanS82R47tV7G3avEZ8GzLDW9CQtkNjVW");
      const result = await client.fetch("rococo", query);
      expect(result).toHaveProperty('data.event');
    });

  });

  describe("Cores Sold In this Sale", () => {
    it("should fetch data successfully", async () => {
      const client = getClient();
      const query = client.coresSoldInThisSale(127_950);
      const result = await client.fetch("rococo", query);
      console.log(result.data.event);
      expect(result).toHaveProperty('data.event');
    })
  });  

})