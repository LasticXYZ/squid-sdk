import { $fetch } from 'ofetch'
import { getUrl } from '../indexers'
import { getOptions } from '../indexers/utils'
import { build, advancedBuild } from '../queryBuilder'
import {
  BaseEvent,
  GraphLike,
  GraphQuery,
  KeyOf,
  ObjProp,
  QueryProps,
  HistoryInitializedEvent,
  SaleInitializedEvent,
  SalesStartedEvent,
  PurchasedEvent,
  RenewableEvent,
  RenewedEvent,
  TransferredEvent,
  PartitionedEvent,
  InterlacedEvent,
  AssignedEvent,
  PooledEvent,
  CoreCountRequestedEvent,
  CoreCountChangedEvent,
  ReservationMadeEvent,
  ReservationCancelledEvent,
  LeasedEvent,
  LeaseEndingEvent,
  RevenueClaimBegunEvent,
  RevenueClaimItemEvent,
  RevenueClaimPaidEvent,
  CreditPurchasedEvent,
  RegionDroppedEvent,
  ContributionDroppedEvent,
  HistoryDroppedEvent,
  HistoryIgnoredEvent,
  ClaimsReadyEvent,
  CoreAssignedEvent,
  AllowedRenewalDroppedEvent,
  ConfigureCall,
  ReserveCall,
  UnreserveCall,
  SetLeaseCall,
  StartSalesCall,
  PurchaseCall,
  RenewCall,
  TransferCall,
  PartitionCall,
  InterlaceCall,
  AssignCall,
  PoolCall,
  ClaimRevenueCall,
  PurchaseCreditCall,
  DropRegionCall,
  DropContributionCall,
  DropHistoryCall,
  DropRenewalCall,
  RequestCoreCountCall
} from '../types'

import {
  defaultField,
  genericCountQuery,
  getFields,
  getRecursiveFields,
  includeBurned,
  optionToQuery,
} from './defaults'

class SquidClient {
  constructor() {
  }

  //collectionById(id: string, recFields?: ObjProp<SquidCollection>): GraphQuery {
  //   const toQuery = getrecFields(recFields)
  //   return advancedBuild('collection: collectionEntityById', toQuery, {
  //     id: { type: 'String', required: true, value: id, name: 'id' },
  //   })
  // }

  eventAllHistoryInitialized(): GraphQuery {
    const recFields = getRecursiveFields(HistoryInitializedEvent)
    return advancedBuild('event: historyInitializeds', recFields, {})
  }

  eventAllSaleInitialized(): GraphQuery {
    const recFields = getRecursiveFields(SaleInitializedEvent)
    return advancedBuild('event: saleInitializeds', recFields, {})
  }

  eventAllSalesStarted(): GraphQuery {
    const recFields = getRecursiveFields(SalesStartedEvent)
    return advancedBuild('event: salesStarteds', recFields, {})
  }

  eventAllPurchased(): GraphQuery {
    const recFields = getRecursiveFields(PurchasedEvent)
    return advancedBuild('event: purchaseds', recFields, {})
  }

  eventAllRenewable(): GraphQuery {
    const recFields = getRecursiveFields(RenewableEvent)
    return advancedBuild('event: renewables', recFields, {})
  }

  eventAllRenewed(): GraphQuery {
    const recFields = getRecursiveFields(RenewedEvent)
    return advancedBuild('event: reneweds', recFields, {})
  }

  eventAllTransferred(): GraphQuery {
    const recFields = getRecursiveFields(TransferredEvent)
    return advancedBuild('event: transferreds', recFields, {})
  }

  eventAllPartitioned(): GraphQuery {
    const recFields = getRecursiveFields(PartitionedEvent)
    return advancedBuild('event: partitioneds', recFields, {})
  }

  eventAllInterlaced(): GraphQuery {
    const recFields = getRecursiveFields(InterlacedEvent)
    return advancedBuild('event: interlaceds', recFields, {})
  }

  eventAllAssigned(): GraphQuery {
    const recFields = getRecursiveFields(AssignedEvent)
    return advancedBuild('event: assigneds', recFields, {})
  }

  eventAllPooled(): GraphQuery {
    const recFields = getRecursiveFields(PooledEvent)
    return advancedBuild('event: pooleds', recFields, {})
  }

  eventAllCoreCountRequested(): GraphQuery {
    const recFields = getRecursiveFields(CoreCountRequestedEvent)
    return advancedBuild('event: coreCountRequesteds', recFields, {})
  }

  eventAllCoreCountChanged(): GraphQuery {
    const recFields = getRecursiveFields(CoreCountChangedEvent)
    return advancedBuild('event: coreCountChangeds', recFields, {})
  }

  eventAllReservationMade(): GraphQuery {
    const recFields = getRecursiveFields(ReservationMadeEvent)
    return advancedBuild('event: reservationMades', recFields, {})
  }

  eventAllReservationCancelled(): GraphQuery {
    const recFields = getRecursiveFields(ReservationCancelledEvent)
    return advancedBuild('event: reservationCancelleds', recFields, {})
  }

  eventAllLeased(): GraphQuery {
    const recFields = getRecursiveFields(LeasedEvent)
    return advancedBuild('event: leaseds', recFields, {})
  }

  eventAllLeaseEnding(): GraphQuery {
    const recFields = getRecursiveFields(LeaseEndingEvent)
    return advancedBuild('event: leaseEndings', recFields, {})
  }

  eventAllRevenueClaimBegun(): GraphQuery {
    const recFields = getRecursiveFields(RevenueClaimBegunEvent)
    return advancedBuild('event: revenueClaimBeguns', recFields, {})
  }

  eventAllRevenueClaimItem(): GraphQuery {
    const recFields = getRecursiveFields(RevenueClaimItemEvent)
    return advancedBuild('event: revenueClaimItems', recFields, {})
  }

  eventAllRevenueClaimPaid(): GraphQuery {
    const recFields = getRecursiveFields(RevenueClaimPaidEvent)
    return advancedBuild('event: revenueClaimPaids', recFields, {})
  }

  eventAllCreditPurchased(): GraphQuery {
    const recFields = getRecursiveFields(CreditPurchasedEvent)
    return advancedBuild('event: creditPurchaseds', recFields, {})
  }

  eventAllRegionDropped(): GraphQuery {
    const recFields = getRecursiveFields(RegionDroppedEvent)
    return advancedBuild('event: regionDroppeds', recFields, {})
  }

  eventAllContributionDropped(): GraphQuery {
    const recFields = getRecursiveFields(ContributionDroppedEvent)
    return advancedBuild('event: contributionDroppeds', recFields, {})
  }

  eventAllHistoryDropped(): GraphQuery {
    const recFields = getRecursiveFields(HistoryDroppedEvent)
    return advancedBuild('event: historyDroppeds', recFields, {})
  }

  eventAllHistoryIgnored(): GraphQuery {
    const recFields = getRecursiveFields(HistoryIgnoredEvent)
    return advancedBuild('event: historyIgnoreds', recFields, {})
  }

  eventAllClaimsReady(): GraphQuery {
    const recFields = getRecursiveFields(ClaimsReadyEvent)
    return advancedBuild('event: claimsReadys', recFields, {})
  }

  eventAllCoreAssigned(): GraphQuery {
    const recFields = getRecursiveFields(CoreAssignedEvent)
    return advancedBuild('event: coreAssigneds', recFields, {})
  }

  eventAllAllowedRenewalDropped(): GraphQuery {
    const recFields = getRecursiveFields(AllowedRenewalDroppedEvent)
    return advancedBuild('event: allowedRenewalDroppeds', recFields, {})
  }

  callAllConfigure(): GraphQuery {
    const recFields = getRecursiveFields(ConfigureCall)
    return advancedBuild('call: configures', recFields, {})
  }

  callAllReserve(): GraphQuery {
    const recFields = getRecursiveFields(ReserveCall)
    return advancedBuild('call: reserves', recFields, {})
  }

  callAllUnreserve(): GraphQuery {
    const recFields = getRecursiveFields(UnreserveCall)
    return advancedBuild('call: unreserves', recFields, {})
  }

  callAllSetLease(): GraphQuery {
    const recFields = getRecursiveFields(SetLeaseCall)
    return advancedBuild('call: setLeases', recFields, {})
  }

  callAllStartSales(): GraphQuery {
    const recFields = getRecursiveFields(StartSalesCall)
    return advancedBuild('call: startSaless', recFields, {})
  }

  callAllPurchase(): GraphQuery {
    const recFields = getRecursiveFields(PurchaseCall)
    return advancedBuild('call: purchases', recFields, {})
  }

  callAllRenew(): GraphQuery {
    const recFields = getRecursiveFields(RenewCall)
    return advancedBuild('call: renews', recFields, {})
  }

  callAllTransfer(): GraphQuery {
    const recFields = getRecursiveFields(TransferCall)
    return advancedBuild('call: transfers', recFields, {})
  }

  callAllPartition(): GraphQuery {
    const recFields = getRecursiveFields(PartitionCall)
    return advancedBuild('call: partitions', recFields, {})
  }

  callAllInterlace(): GraphQuery {
    const recFields = getRecursiveFields(InterlaceCall)
    return advancedBuild('call: interlaces', recFields, {})
  }

  callAllAssign(): GraphQuery {
    const recFields = getRecursiveFields(AssignCall)
    return advancedBuild('call: assigns', recFields, {})
  }

  callAllPool(): GraphQuery {
    const recFields = getRecursiveFields(PoolCall)
    return advancedBuild('call: pools', recFields, {})
  }

  callAllClaimRevenue(): GraphQuery {
    const recFields = getRecursiveFields(ClaimRevenueCall)
    return advancedBuild('call: claimRevenues', recFields, {})
  }

  callAllPurchaseCredit(): GraphQuery {
    const recFields = getRecursiveFields(PurchaseCreditCall)
    return advancedBuild('call: purchaseCredits', recFields, {})
  }

  callAllDropRegion(): GraphQuery {
    const recFields = getRecursiveFields(DropRegionCall)
    return advancedBuild('call: dropRegions', recFields, {})
  }

  callAllDropContribution(): GraphQuery {
    const recFields = getRecursiveFields(DropContributionCall)
    return advancedBuild('call: dropContributions', recFields, {})
  }

  callAllDropHistory(): GraphQuery {
    const recFields = getRecursiveFields(DropHistoryCall)
    return advancedBuild('call: dropHistorys', recFields, {})
  }

  callAllDropRenewal(): GraphQuery {
    const recFields = getRecursiveFields(DropRenewalCall)
    return advancedBuild('call: dropRenewals', recFields, {})
  }

  callAllRequestCoreCount(): GraphQuery {
    const recFields = getRecursiveFields(RequestCoreCountCall)
    return advancedBuild('call: requestCoreCounts', recFields, {})
  }

  fetch<D>(query: GraphQuery): Promise<GraphLike<D>> {
    const baseURL = getUrl()
    const opts = getOptions({ query, baseURL, path: '' })
    return $fetch<GraphLike<D>>(baseURL, opts)
  }
}

export default SquidClient
