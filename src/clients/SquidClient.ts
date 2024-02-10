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
import { getUrl } from '../indexers'
import { getOptions } from '../indexers/utils'
import { build, advancedBuild, advancedBuild2 } from '../queryBuilder'
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
  getRecursiveFieldstoArr,
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

  eventWhoPurchased(who: string): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PurchasedEvent)
    return advancedBuild2('event: purchaseds', recFields, {
      where: { type: 'String', required: true, value: who, name: 'who_eq' },
    })
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
    return advancedBuild('event: claimsReadies', recFields, {})
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
    return advancedBuild('call: configureExts', recFields, {})
  }

  callAllReserve(): GraphQuery {
    const recFields = getRecursiveFields(ReserveCall)
    return advancedBuild('call: reserveExts', recFields, {})
  }

  callAllUnreserve(): GraphQuery {
    const recFields = getRecursiveFields(UnreserveCall)
    return advancedBuild('call: unreserveExts', recFields, {})
  }

  callAllSetLease(): GraphQuery {
    const recFields = getRecursiveFields(SetLeaseCall)
    return advancedBuild('call: setLeaseExts', recFields, {})
  }

  callAllStartSales(): GraphQuery {
    const recFields = getRecursiveFields(StartSalesCall)
    return advancedBuild('call: startSalesExts', recFields, {})
  }

  callAllPurchase(): GraphQuery {
    const recFields = getRecursiveFields(PurchaseCall)
    return advancedBuild('call: purchaseExts', recFields, {})
  }

  callAllRenew(): GraphQuery {
    const recFields = getRecursiveFields(RenewCall)
    return advancedBuild('call: renewExts', recFields, {})
  }

  callAllTransfer(): GraphQuery {
    const recFields = getRecursiveFields(TransferCall)
    return advancedBuild('call: transferExts', recFields, {})
  }

  callAllPartition(): GraphQuery {
    const recFields = getRecursiveFields(PartitionCall)
    return advancedBuild('call: partitionExts', recFields, {})
  }

  callAllInterlace(): GraphQuery {
    const recFields = getRecursiveFields(InterlaceCall)
    return advancedBuild('call: interlaceExts', recFields, {})
  }

  callAllAssign(): GraphQuery {
    const recFields = getRecursiveFields(AssignCall)
    return advancedBuild('call: assignExts', recFields, {})
  }

  callAllPool(): GraphQuery {
    const recFields = getRecursiveFields(PoolCall)
    return advancedBuild('call: poolExts', recFields, {})
  }

  callAllClaimRevenue(): GraphQuery {
    const recFields = getRecursiveFields(ClaimRevenueCall)
    return advancedBuild('call: claimRevenueExts', recFields, {})
  }

  callAllPurchaseCredit(): GraphQuery {
    const recFields = getRecursiveFields(PurchaseCreditCall)
    return advancedBuild('call: purchaseCreditExts', recFields, {})
  }

  callAllDropRegion(): GraphQuery {
    const recFields = getRecursiveFields(DropRegionCall)
    return advancedBuild('call: dropRegionExts', recFields, {})
  }

  callAllDropContribution(): GraphQuery {
    const recFields = getRecursiveFields(DropContributionCall)
    return advancedBuild('call: dropContributionExts', recFields, {})
  }

  callAllDropHistory(): GraphQuery {
    const recFields = getRecursiveFields(DropHistoryCall)
    return advancedBuild('call: dropHistoryExts', recFields, {})
  }

  callAllDropRenewal(): GraphQuery {
    const recFields = getRecursiveFields(DropRenewalCall)
    return advancedBuild('call: dropRenewalExts', recFields, {})
  }

  callAllRequestCoreCount(): GraphQuery {
    const recFields = getRecursiveFields(RequestCoreCountCall)
    return advancedBuild('call: requestCoreCountExts', recFields, {})
  }

  fetch<D>(query: GraphQuery): Promise<GraphLike<D>> {
    const baseURL = getUrl()
    const opts = getOptions({ query, baseURL, path: '' })
    return $fetch<GraphLike<D>>(baseURL, opts)
  }
}

export default SquidClient
