/* eslint-disable quote-props */
/* eslint-disable camelcase */
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
import { advancedBuild2 } from '../queryBuilder'
import {
  GraphLike,
  GraphQuery,
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
  RequestCoreCountCall,
  NewMultisigEvent,
  MultisigApprovalEvent,
  MultisigExecutedEvent,
  MultisigCancelledEvent,
  CoreOwnerEvent
} from '../types'

import {
  getRecursiveFieldstoArr,
} from './defaults'

class SquidClient {
  // Returns how many cores have been sold in a specific sale
  coresSoldInThisSale(begin: number): GraphQuery {
    return {
    query: `{
      event: purchasedsConnection(orderBy: id_DESC, where: {regionId: {begin_eq: ${begin}}}) {
        totalCount
      }
      }
      `,
      variables: {}
    }
  }

  eventAllNewMultisigs(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PurchasedEvent)
    return advancedBuild2('event: newMultisigs', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[NewMultisigsOrderByInput!]' },
    })
  }

  eventAllHistoryInitialized(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(HistoryInitializedEvent)
    return advancedBuild2('event: historyInitializeds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[HistoryInitializedOrderByInput!]' },
    })
  }

  eventAllSaleInitialized(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(SaleInitializedEvent)
    return advancedBuild2('event: saleInitializeds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[SaleInitializedOrderByInput!]' },
    })
  }

  eventAllSalesStarted(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(SalesStartedEvent)
    return advancedBuild2('event: salesStarteds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[SalesStartedOrderByInput!]' },
    })
  }

  eventAllCoreOwner(begin_gte = 0, begin_lt = undefined, limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(CoreOwnerEvent);
    const whereClause = {
      value: {
        regionId: { begin_gte: begin_gte, ...(begin_lt !== undefined && { begin_lt: begin_lt }) }
      },
      type: 'CoreOwnerWhereInput',
      required: true
    };
    return advancedBuild2('event: coreOwners', recFields, {
      where: whereClause,
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[CoreOwnerOrderByInput!]'},
    });
  }

  eventOwnedAndAssignedCoreOwner(owner: string, limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(CoreOwnerEvent)
    const whereClause = {
      value: {
        'owner_eq': owner,
        'assigned_eq': true,
      },
      type: 'CoreOwnerWhereInput',
      required: true
    };
    return advancedBuild2('event: coreOwners', recFields, {
      where: whereClause,
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[CoreOwnerOrderByInput!]' },
    })
  }

  eventOwnedAndPooledCoreOwner(owner: string, limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(CoreOwnerEvent)
    const whereClause = {
      value: {
        'owner_eq': owner,
        'pooled_eq': true,
      },
      type: 'CoreOwnerWhereInput',
      required: true
    };
    return advancedBuild2('event: coreOwners', recFields, {
      where: whereClause,
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[CoreOwnerOrderByInput!]' },
    })
  }

  eventWhoCoreOwner(owner: string, begin_gte = 0, begin_lt = undefined, limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(CoreOwnerEvent)
    const whereClause = {
      value: {
        'owner_eq': owner,
        regionId: { 
          begin_gte: begin_gte,
          ...(begin_lt !== undefined && { begin_lt: begin_lt })
        }
      },
      type: 'CoreOwnerWhereInput',
      required: true
    };
    return advancedBuild2('event: coreOwners', recFields, {
      where: whereClause,
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[CoreOwnerOrderByInput!]' },
    })
  }

  eventSpecificRegionCoreOwner(coreNb, begin, mask: string, limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(CoreOwnerEvent)
    return advancedBuild2('event: coreOwners', recFields, {
      where: { 
        value: {
          regionId: {
            core_eq: coreNb, 
            begin_eq: begin, 
            mask_eq: mask
          }
        }, 
        type: 'CoreOwnerWhereInput',
        required: true 
      },
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[CoreOwnerOrderByInput!]' },
    })
  }

  eventAllPurchased(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PurchasedEvent)
    return advancedBuild2('event: purchaseds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PurchasedOrderByInput!]' },
    })
  }

  eventWhoPurchased(who: string, limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PurchasedEvent)
    return advancedBuild2('event: purchaseds', recFields, {
      where: { 
        value: {
          'who_eq': who
        }, 
        type: 'PurchasedWhereInput',
        required: true 
      },
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PurchasedOrderByInput!]' },
    })
  }

  eventCorePurchased(coreNb, limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PurchasedEvent)
    return advancedBuild2('event: purchaseds', recFields, {
      where: { 
        value: {
          regionId: {core_eq: coreNb}
        }, 
        type: 'PurchasedWhereInput',
        required: true 
      },
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PurchasedOrderByInput!]' },
    })
  }

  eventAllRenewable(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RenewableEvent)
    return advancedBuild2('event: renewables', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RenewableOrderByInput!]' },
    })
  }

  eventAllRenewed(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RenewedEvent)
    return advancedBuild2('event: reneweds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RenewedOrderByInput!]' },
    })
  }

  eventAllTransferred(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(TransferredEvent)
    return advancedBuild2('event: transferreds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[TransferredOrderByInput!]' },
    })
  }

  eventWhoTransferred(who: string): GraphQuery {
    const recFields = getRecursiveFieldstoArr(TransferredEvent)
    return advancedBuild2('event: transferreds', recFields, {
      where: { 
        value: {
          'who_eq': who
        }, 
        type: 'TransferredWhereInput',
        required: true 
      },
    })
  }

  eventCoreTransferred(coreNb): GraphQuery {
    const recFields = getRecursiveFieldstoArr(TransferredEvent)
    return advancedBuild2('event: transferreds', recFields, {
      where: { 
        value: {
          regionId: {core_eq: coreNb}
        }, 
        type: 'TransferredWhereInput',
        required: true 
      },
    })
  }


  eventAllPartitioned(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PartitionedEvent)
    return advancedBuild2('event: partitioneds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PartitionedOrderByInput!]' },
    })
  }

  eventAllInterlaced(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(InterlacedEvent)
    return advancedBuild2('event: interlaceds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[InterlacedOrderByInput!]' },
    })
  }

  eventAllAssigned(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(AssignedEvent)
    return advancedBuild2('event: assigneds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[AssignedOrderByInput!]' },
    })
  }

  eventAllPooled(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PooledEvent)
    return advancedBuild2('event: pooleds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PooledOrderByInput!]' },
    })
  }

  eventAllCoreCountRequested(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(CoreCountRequestedEvent)
    return advancedBuild2('event: coreCountRequesteds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[CoreCountRequestedOrderByInput!]' },
    })
  }

  eventAllCoreCountChanged(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(CoreCountChangedEvent)
    return advancedBuild2('event: coreCountChangeds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[CoreCountChangedOrderByInput!]' },
    })
  }

  eventAllReservationMade(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(ReservationMadeEvent)
    return advancedBuild2('event: reservationMades', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[ReservationMadeOrderByInput!]' },
    })
  }

  eventAllReservationCancelled(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(ReservationCancelledEvent)
    return advancedBuild2('event: reservationCancelleds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[ReservationCancelledOrderByInput!]' },
    })
  }

  eventAllLeased(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(LeasedEvent)
    return advancedBuild2('event: leaseds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[LeasedOrderByInput!]' },
    })
  }

  eventAllLeaseEnding(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(LeaseEndingEvent)
    return advancedBuild2('event: leaseEndings', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[LeaseEndingOrderByInput!]' },
    })
  }

  eventAllRevenueClaimBegun(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RevenueClaimBegunEvent)
    return advancedBuild2('event: revenueClaimBeguns', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RevenueClaimBegunOrderByInput!]' },
    })
  }

  eventAllRevenueClaimItem(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RevenueClaimItemEvent)
    return advancedBuild2('event: revenueClaimItems', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RevenueClaimItemOrderByInput!]' },
    })
  }

  eventAllRevenueClaimPaid(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RevenueClaimPaidEvent)
    return advancedBuild2('event: revenueClaimPaids', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RevenueClaimPaidOrderByInput!]' },
    })
  }

  eventAllCreditPurchased(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(CreditPurchasedEvent)
    return advancedBuild2('event: creditPurchaseds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[CreditPurchasedOrderByInput!]' },
    })
  }

  eventAllRegionDropped(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RegionDroppedEvent)
    return advancedBuild2('event: regionDroppeds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RegionDroppedOrderByInput!]' },
    })
  }

  eventAllContributionDropped(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(ContributionDroppedEvent)
    return advancedBuild2('event: contributionDroppeds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[ContributionDroppedOrderByInput!]' },
    })
  }

  eventAllHistoryDropped(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(HistoryDroppedEvent)
    return advancedBuild2('event: historyDroppeds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[HistoryDroppedOrderByInput!]' },
    })
  }

  eventAllHistoryIgnored(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(HistoryIgnoredEvent)
    return advancedBuild2('event: historyIgnoreds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[HistoryIgnoredOrderByInput!]' },
    })
  }

  eventAllClaimsReady(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(ClaimsReadyEvent)
    return advancedBuild2('event: claimsReadies', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[ClaimsReadyOrderByInput!]' },
    })
  }

  eventAllCoreAssigned(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(CoreAssignedEvent)
    return advancedBuild2('event: coreAssigneds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[CoreAssignedOrderByInput!]' },
    })
  }

  eventAllAllowedRenewalDropped(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(AllowedRenewalDroppedEvent)
    return advancedBuild2('event: allowedRenewalDroppeds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[AllowedRenewalDroppedOrderByInput!]' },
    })
  }

  callAllConfigure(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(ConfigureCall)
    return advancedBuild2('call: configureExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[ConfigureExtOrderByInput!]' },
    })
  }

  callAllReserve(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(ReserveCall)
    return advancedBuild2('call: reserveExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[ReserveExtOrderByInput!]' },
    })
  }

  callAllUnreserve(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(UnreserveCall)
    return advancedBuild2('call: unreserveExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[UnreserveExtOrderByInput!]' },
    })
  }

  callAllSetLease(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(SetLeaseCall)
    return advancedBuild2('call: setLeaseExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[SetLeaseExtOrderByInput!]' },
    })
  }

  callAllStartSales(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(StartSalesCall)
    return advancedBuild2('call: startSalesExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[StartSalesExtOrderByInput!]' },
    })
  }

  callAllPurchase(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PurchaseCall)
    return advancedBuild2('call: purchaseExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PurchaseExtOrderByInput!]' },
    })
  }

  callAllRenew(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RenewCall)
    return advancedBuild2('call: renewExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RenewExtOrderByInput!]' },
    })
  }

  callAllTransfer(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(TransferCall)
    return advancedBuild2('call: transferExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[TransferExtOrderByInput!]' },
    })
  }

  callAllPartition(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PartitionCall)
    return advancedBuild2('call: partitionExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PartitionExtOrderByInput!]' },
    })
  }

  callAllInterlace(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(InterlaceCall)
    return advancedBuild2('call: interlaceExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[InterlaceExtOrderByInput!]' },
    })
  }

  callAllAssign(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(AssignCall)
    return advancedBuild2('call: assignExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[AssignExtOrderByInput!]' },
    })
  }

  callAllPool(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PoolCall)
    return advancedBuild2('call: poolExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PoolExtOrderByInput!]' },
    })
  }

  callAllClaimRevenue(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(ClaimRevenueCall)
    return advancedBuild2('call: claimRevenueExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[ClaimRevenueExtOrderByInput!]' },
    })
  }

  callAllPurchaseCredit(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PurchaseCreditCall)
    return advancedBuild2('call: purchaseCreditExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PurchaseCreditExtOrderByInput!]' },
    })
  }

  callAllDropRegion(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(DropRegionCall)
    return advancedBuild2('call: dropRegionExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[DropRegionExtOrderByInput!]' },
    })
  }

  callAllDropContribution(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(DropContributionCall)
    return advancedBuild2('call: dropContributionExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[DropContributionExtOrderByInput!]' },
    })
  }

  callAllDropHistory(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(DropHistoryCall)
    return advancedBuild2('call: dropHistoryExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[DropHistoryExtOrderByInput!]' },
    })
  }

  callAllDropRenewal(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(DropRenewalCall)
    return advancedBuild2('call: dropRenewalExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[DropRenewalExtOrderByInput!]' },
    })
  }

  callAllRequestCoreCount(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RequestCoreCountCall)
    return advancedBuild2('call: requestCoreCountExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RequestCoreCountExtOrderByInput!]' },
    })
  }

  // Multisig Events 
  eventAllNewMultisig(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(NewMultisigEvent)
    return advancedBuild2('event: newMultisigs', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[NewMultisigOrderByInput!]' },
    })
  }

  eventAllMultisigApproval(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(MultisigApprovalEvent)
    return advancedBuild2('event: multisigApprovals', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[MultisigApprovalOrderByInput!]' },
    })
  }

  eventAllMultisigExecuted(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(MultisigExecutedEvent)
    return advancedBuild2('event: multisigExecuteds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[MultisigExecutedOrderByInput!]' },
    })
  }

  eventAllMultisigCancelled(limit = 10, offset = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(MultisigCancelledEvent)
    return advancedBuild2('event: multisigCancelleds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[MultisigCancelledOrderByInput!]' },
    })
  }

  fetch<D>(rpc_name: string, query: GraphQuery): Promise<GraphLike<D>> {
    const baseURL = getUrl(rpc_name)
    const opts = getOptions({ query, baseURL, path: '' })
    return $fetch<GraphLike<D>>(baseURL, opts)
  }
}

export default SquidClient
