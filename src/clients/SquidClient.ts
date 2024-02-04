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

  //collectionById(id: string, fields?: ObjProp<SquidCollection>): GraphQuery {
  //   const toQuery = getFields(fields)
  //   return build('collection: collectionEntityById', toQuery, {
  //     id: { type: 'String', required: true, value: id, name: 'id' },
  //   })
  // }

  eventAllHistoryInitialized(): GraphQuery {
    const fields = getFields(HistoryInitializedEvent)
    return build('event: historyInitializeds', fields, {})
  }

  eventAllSaleInitialized(): GraphQuery {
    const fields = getFields(SaleInitializedEvent)
    return build('event: saleInitializeds', fields, {})
  }

  eventAllSalesStarted(): GraphQuery {
    const recFields = getRecursiveFields(SalesStartedEvent)
    return advancedBuild('event: salesStarteds', recFields, {})
  }

  eventAllPurchased(): GraphQuery {
    const fields = getFields(PurchasedEvent)
    return build('event: purchaseds', fields, {})
  }

  eventAllRenewable(): GraphQuery {
    const fields = getFields(RenewableEvent)
    return build('event: renewables', fields, {})
  }

  eventAllRenewed(): GraphQuery {
    const fields = getFields(RenewedEvent)
    return build('event: reneweds', fields, {})
  }

  eventAllTransferred(): GraphQuery {
    const fields = getFields(TransferredEvent)
    return build('event: transferreds', fields, {})
  }

  eventAllPartitioned(): GraphQuery {
    const fields = getFields(PartitionedEvent)
    return build('event: partitioneds', fields, {})
  }

  eventAllInterlaced(): GraphQuery {
    const fields = getFields(InterlacedEvent)
    return build('event: interlaceds', fields, {})
  }

  eventAllAssigned(): GraphQuery {
    const fields = getFields(AssignedEvent)
    return build('event: assigneds', fields, {})
  }

  eventAllPooled(): GraphQuery {
    const fields = getFields(PooledEvent)
    return build('event: pooleds', fields, {})
  }

  eventAllCoreCountRequested(): GraphQuery {
    const fields = getFields(CoreCountRequestedEvent)
    return build('event: coreCountRequesteds', fields, {})
  }

  eventAllCoreCountChanged(): GraphQuery {
    const fields = getFields(CoreCountChangedEvent)
    return build('event: coreCountChangeds', fields, {})
  }

  eventAllReservationMade(): GraphQuery {
    const fields = getFields(ReservationMadeEvent)
    return build('event: reservationMades', fields, {})
  }

  eventAllReservationCancelled(): GraphQuery {
    const fields = getFields(ReservationCancelledEvent)
    return build('event: reservationCancelleds', fields, {})
  }

  eventAllLeased(): GraphQuery {
    const fields = getFields(LeasedEvent)
    return build('event: leaseds', fields, {})
  }

  eventAllLeaseEnding(): GraphQuery {
    const fields = getFields(LeaseEndingEvent)
    return build('event: leaseEndings', fields, {})
  }

  eventAllRevenueClaimBegun(): GraphQuery {
    const fields = getFields(RevenueClaimBegunEvent)
    return build('event: revenueClaimBeguns', fields, {})
  }

  eventAllRevenueClaimItem(): GraphQuery {
    const fields = getFields(RevenueClaimItemEvent)
    return build('event: revenueClaimItems', fields, {})
  }

  eventAllRevenueClaimPaid(): GraphQuery {
    const fields = getFields(RevenueClaimPaidEvent)
    return build('event: revenueClaimPaids', fields, {})
  }

  eventAllCreditPurchased(): GraphQuery {
    const fields = getFields(CreditPurchasedEvent)
    return build('event: creditPurchaseds', fields, {})
  }

  eventAllRegionDropped(): GraphQuery {
    const fields = getFields(RegionDroppedEvent)
    return build('event: regionDroppeds', fields, {})
  }

  eventAllContributionDropped(): GraphQuery {
    const fields = getFields(ContributionDroppedEvent)
    return build('event: contributionDroppeds', fields, {})
  }

  eventAllHistoryDropped(): GraphQuery {
    const fields = getFields(HistoryDroppedEvent)
    return build('event: historyDroppeds', fields, {})
  }

  eventAllHistoryIgnored(): GraphQuery {
    const fields = getFields(HistoryIgnoredEvent)
    return build('event: historyIgnoreds', fields, {})
  }

  eventAllClaimsReady(): GraphQuery {
    const fields = getFields(ClaimsReadyEvent)
    return build('event: claimsReadys', fields, {})
  }

  eventAllCoreAssigned(): GraphQuery {
    const fields = getFields(CoreAssignedEvent)
    return build('event: coreAssigneds', fields, {})
  }

  eventAllAllowedRenewalDropped(): GraphQuery {
    const fields = getFields(AllowedRenewalDroppedEvent)
    return build('event: allowedRenewalDroppeds', fields, {})
  }

  callAllConfigure(): GraphQuery {
    const fields = getFields(ConfigureCall)
    return build('call: configures', fields, {})
  }

  callAllReserve(): GraphQuery {
    const fields = getFields(ReserveCall)
    return build('call: reserves', fields, {})
  }

  callAllUnreserve(): GraphQuery {
    const fields = getFields(UnreserveCall)
    return build('call: unreserves', fields, {})
  }

  callAllSetLease(): GraphQuery {
    const fields = getFields(SetLeaseCall)
    return build('call: setLeases', fields, {})
  }

  callAllStartSales(): GraphQuery {
    const fields = getFields(StartSalesCall)
    return build('call: startSaless', fields, {})
  }

  callAllPurchase(): GraphQuery {
    const fields = getFields(PurchaseCall)
    return build('call: purchases', fields, {})
  }

  callAllRenew(): GraphQuery {
    const fields = getFields(RenewCall)
    return build('call: renews', fields, {})
  }

  callAllTransfer(): GraphQuery {
    const fields = getFields(TransferCall)
    return build('call: transfers', fields, {})
  }

  callAllPartition(): GraphQuery {
    const fields = getFields(PartitionCall)
    return build('call: partitions', fields, {})
  }

  callAllInterlace(): GraphQuery {
    const fields = getFields(InterlaceCall)
    return build('call: interlaces', fields, {})
  }

  callAllAssign(): GraphQuery {
    const fields = getFields(AssignCall)
    return build('call: assigns', fields, {})
  }

  callAllPool(): GraphQuery {
    const fields = getFields(PoolCall)
    return build('call: pools', fields, {})
  }

  callAllClaimRevenue(): GraphQuery {
    const fields = getFields(ClaimRevenueCall)
    return build('call: claimRevenues', fields, {})
  }

  callAllPurchaseCredit(): GraphQuery {
    const fields = getFields(PurchaseCreditCall)
    return build('call: purchaseCredits', fields, {})
  }

  callAllDropRegion(): GraphQuery {
    const fields = getFields(DropRegionCall)
    return build('call: dropRegions', fields, {})
  }

  callAllDropContribution(): GraphQuery {
    const fields = getFields(DropContributionCall)
    return build('call: dropContributions', fields, {})
  }

  callAllDropHistory(): GraphQuery {
    const fields = getFields(DropHistoryCall)
    return build('call: dropHistorys', fields, {})
  }

  callAllDropRenewal(): GraphQuery {
    const fields = getFields(DropRenewalCall)
    return build('call: dropRenewals', fields, {})
  }

  callAllRequestCoreCount(): GraphQuery {
    const fields = getFields(RequestCoreCountCall)
    return build('call: requestCoreCounts', fields, {})
  }

  fetch<D>(query: GraphQuery): Promise<GraphLike<D>> {
    const baseURL = getUrl()
    const opts = getOptions({ query, baseURL, path: '' })
    return $fetch<GraphLike<D>>(baseURL, opts)
  }
}

export default SquidClient
