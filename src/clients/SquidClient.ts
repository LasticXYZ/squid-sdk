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
  RequestCoreCountCall,
  NewMultisigEvent,
  MultisigApprovalEvent,
  MultisigExecutedEvent,
  MultisigCancelledEvent
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
  //   return advancedBuild2('collection: collectionEntityById', toQuery, {
  //     id: { type: 'String', required: true, value: id, name: 'id' },
  //   })
  // }

  eventAllNewMultisigs(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PurchasedEvent)
    return advancedBuild2('event: newMultisigs', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[NewMultisigsOrderByInput!]'},
    })
  }

  eventAllHistoryInitialized(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(HistoryInitializedEvent)
    return advancedBuild2('event: historyInitializeds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[HistoryInitializedOrderByInput!]'},
    })
  }

  eventAllSaleInitialized(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(SaleInitializedEvent)
    return advancedBuild2('event: saleInitializeds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[SaleInitializedOrderByInput!]'},
    })
  }

  eventAllSalesStarted(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(SalesStartedEvent)
    return advancedBuild2('event: salesStarteds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[SalesStartedOrderByInput!]'},
    })
  }

  eventAllPurchased(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PurchasedEvent)
    return advancedBuild2('event: purchaseds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PurchasedOrderByInput!]'},
    })
  }

  eventWhoPurchased(who: string, limit: number = 10, offset: number = 0): GraphQuery {
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
      orderBy: { value: 'id_DESC', required: true, type: '[PurchasedOrderByInput!]'},
    })
  }

  eventCorePurchased(coreNb: number, limit: number = 10, offset: number = 0): GraphQuery {
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
      orderBy: { value: 'id_DESC', required: true, type: '[PurchasedOrderByInput!]'},
    })
  }

  eventAllRenewable(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RenewableEvent)
    return advancedBuild2('event: renewables', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RenewableOrderByInput!]'},
    })
  }

  eventAllRenewed(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RenewedEvent)
    return advancedBuild2('event: reneweds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RenewedOrderByInput!]'},
    })
  }

  eventAllTransferred(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(TransferredEvent)
    return advancedBuild2('event: transferreds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[TransferredOrderByInput!]'},
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

  eventCoreTransferred(coreNb: number): GraphQuery {
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


  eventAllPartitioned(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PartitionedEvent)
    return advancedBuild2('event: partitioneds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PartitionedOrderByInput!]'},
    })
  }

  eventAllInterlaced(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(InterlacedEvent)
    return advancedBuild2('event: interlaceds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[InterlacedOrderByInput!]'},
    })
  }

  eventAllAssigned(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(AssignedEvent)
    return advancedBuild2('event: assigneds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[AssignedOrderByInput!]'},
    })
  }

  eventAllPooled(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PooledEvent)
    return advancedBuild2('event: pooleds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PooledOrderByInput!]'},
    })
  }

  eventAllCoreCountRequested(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(CoreCountRequestedEvent)
    return advancedBuild2('event: coreCountRequesteds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[CoreCountRequestedOrderByInput!]'},
    })
  }

  eventAllCoreCountChanged(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(CoreCountChangedEvent)
    return advancedBuild2('event: coreCountChangeds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[CoreCountChangedOrderByInput!]'},
    })
  }

  eventAllReservationMade(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(ReservationMadeEvent)
    return advancedBuild2('event: reservationMades', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[ReservationMadeOrderByInput!]'},
    })
  }

  eventAllReservationCancelled(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(ReservationCancelledEvent)
    return advancedBuild2('event: reservationCancelleds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[ReservationCancelledOrderByInput!]'},
    })
  }

  eventAllLeased(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(LeasedEvent)
    return advancedBuild2('event: leaseds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[LeasedOrderByInput!]'},
    })
  }

  eventAllLeaseEnding(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(LeaseEndingEvent)
    return advancedBuild2('event: leaseEndings', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[LeaseEndingOrderByInput!]'},
    })
  }

  eventAllRevenueClaimBegun(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RevenueClaimBegunEvent)
    return advancedBuild2('event: revenueClaimBeguns', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RevenueClaimBegunOrderByInput!]'},
    })
  }

  eventAllRevenueClaimItem(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RevenueClaimItemEvent)
    return advancedBuild2('event: revenueClaimItems', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RevenueClaimItemOrderByInput!]'},
    })
  }

  eventAllRevenueClaimPaid(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RevenueClaimPaidEvent)
    return advancedBuild2('event: revenueClaimPaids', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RevenueClaimPaidOrderByInput!]'},
    })
  }

  eventAllCreditPurchased(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(CreditPurchasedEvent)
    return advancedBuild2('event: creditPurchaseds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[CreditPurchasedOrderByInput!]'},
    })
  }

  eventAllRegionDropped(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RegionDroppedEvent)
    return advancedBuild2('event: regionDroppeds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RegionDroppedOrderByInput!]'},
    })
  }

  eventAllContributionDropped(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(ContributionDroppedEvent)
    return advancedBuild2('event: contributionDroppeds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[ContributionDroppedOrderByInput!]'},
    })
  }

  eventAllHistoryDropped(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(HistoryDroppedEvent)
    return advancedBuild2('event: historyDroppeds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[HistoryDroppedOrderByInput!]'},
    })
  }

  eventAllHistoryIgnored(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(HistoryIgnoredEvent)
    return advancedBuild2('event: historyIgnoreds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[HistoryIgnoredOrderByInput!]'},
    })
  }

  eventAllClaimsReady(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(ClaimsReadyEvent)
    return advancedBuild2('event: claimsReadies', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[ClaimsReadyOrderByInput!]'},
    })
  }

  eventAllCoreAssigned(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(CoreAssignedEvent)
    return advancedBuild2('event: coreAssigneds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[CoreAssignedOrderByInput!]'},
    })
  }

  eventAllAllowedRenewalDropped(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(AllowedRenewalDroppedEvent)
    return advancedBuild2('event: allowedRenewalDroppeds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[AllowedRenewalDroppedOrderByInput!]'},
    })
  }

  callAllConfigure(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(ConfigureCall)
    return advancedBuild2('call: configureExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[ConfigureExtOrderByInput!]'},
    })
  }

  callAllReserve(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(ReserveCall)
    return advancedBuild2('call: reserveExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[ReserveExtOrderByInput!]'},
    })
  }

  callAllUnreserve(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(UnreserveCall)
    return advancedBuild2('call: unreserveExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[UnreserveExtOrderByInput!]'},
    })
  }

  callAllSetLease(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(SetLeaseCall)
    return advancedBuild2('call: setLeaseExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[SetLeaseExtOrderByInput!]'},
    })
  }

  callAllStartSales(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(StartSalesCall)
    return advancedBuild2('call: startSalesExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[StartSalesExtOrderByInput!]'},
    })
  }

  callAllPurchase(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PurchaseCall)
    return advancedBuild2('call: purchaseExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PurchaseExtOrderByInput!]'},
    })
  }

  callAllRenew(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RenewCall)
    return advancedBuild2('call: renewExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RenewExtOrderByInput!]'},
    })
  }

  callAllTransfer(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(TransferCall)
    return advancedBuild2('call: transferExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[TransferExtOrderByInput!]'},
    })
  }

  callAllPartition(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PartitionCall)
    return advancedBuild2('call: partitionExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PartitionExtOrderByInput!]'},
    })
  }

  callAllInterlace(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(InterlaceCall)
    return advancedBuild2('call: interlaceExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[InterlaceExtOrderByInput!]'},
    })
  }

  callAllAssign(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(AssignCall)
    return advancedBuild2('call: assignExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[AssignExtOrderByInput!]'},
    })
  }

  callAllPool(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PoolCall)
    return advancedBuild2('call: poolExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PoolExtOrderByInput!]'},
    })
  }

  callAllClaimRevenue(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(ClaimRevenueCall)
    return advancedBuild2('call: claimRevenueExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[ClaimRevenueExtOrderByInput!]'},
    })
  }

  callAllPurchaseCredit(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(PurchaseCreditCall)
    return advancedBuild2('call: purchaseCreditExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[PurchaseCreditExtOrderByInput!]'},
    })
  }

  callAllDropRegion(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(DropRegionCall)
    return advancedBuild2('call: dropRegionExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[DropRegionExtOrderByInput!]'},
    })
  }

  callAllDropContribution(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(DropContributionCall)
    return advancedBuild2('call: dropContributionExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[DropContributionExtOrderByInput!]'},
    })
  }

  callAllDropHistory(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(DropHistoryCall)
    return advancedBuild2('call: dropHistoryExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[DropHistoryExtOrderByInput!]'},
    })
  }

  callAllDropRenewal(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(DropRenewalCall)
    return advancedBuild2('call: dropRenewalExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[DropRenewalExtOrderByInput!]'},
    })
  }

  callAllRequestCoreCount(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(RequestCoreCountCall)
    return advancedBuild2('call: requestCoreCountExts', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[RequestCoreCountExtOrderByInput!]'},
    })
  }

  // Multisig Events 
  eventAllNewMultisig(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(NewMultisigEvent)
    return advancedBuild2('event: newMultisigs', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[NewMultisigOrderByInput!]'},
    })
  }

  eventAllMultisigApproval(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(MultisigApprovalEvent)
    return advancedBuild2('event: multisigApprovals', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[MultisigApprovalOrderByInput!]'},
    })
  }

  eventAllMultisigExecuted(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(MultisigExecutedEvent)
    return advancedBuild2('event: multisigExecuteds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[MultisigExecutedOrderByInput!]'},
    })
  }

  eventAllMultisigCancelled(limit: number = 10, offset: number = 0): GraphQuery {
    const recFields = getRecursiveFieldstoArr(MultisigCancelledEvent)
    return advancedBuild2('event: multisigCancelleds', recFields, {
      limit: { value: limit, required: true },
      offset: { value: offset, required: false },
      orderBy: { value: 'id_DESC', required: true, type: '[MultisigCancelledOrderByInput!]'},
    })
  }

  fetch<D>(rpc_name: string, query: GraphQuery): Promise<GraphLike<D>> {
    const baseURL = getUrl(rpc_name)
    const opts = getOptions({ query, baseURL, path: '' })
    return $fetch<GraphLike<D>>(baseURL, opts)
  }
}

export default SquidClient
