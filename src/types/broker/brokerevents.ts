
import { CoreAssignment, ScheduleItem, RegionId, AccountId32 } from "./v9430"

class HistoryInitializedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    when: number | null = null;
    privatePoolSize: number | null = null;
    systemPoolSize: number | null = null;
}

class SaleInitializedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    saleStart: number | null = null;
    leadinLength: number | null = null;
    startPrice: bigint | null = null;
    regularPrice: bigint | null = null;
    regionBegin: number | null = null;
    regionEnd: number | null = null;
    idealCoresSold: number | null = null;
    coresOffered: number | null = null;
}

class SalesStartedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    price: bigint | null = null;
    coreCount: number | null = null;
}

class PurchasedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    who: string | null = null;
    regionId: RegionId | null = null;
    price: bigint | null = null;
    duration: number | null = null;
}

class RenewableEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    core: number | null = null;
    price: bigint | null = null;
    begin: number | null = null;
    workload: ScheduleItem[] | null = null;
}

class RenewedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    who: string | null = null;
    price: bigint | null = null;
    oldCore: number | null = null;
    core: number | null = null;
    begin: number | null = null;
    duration: number | null = null;
    workload: ScheduleItem[] | null = null;
}

class TransferredEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    regionId: RegionId | null = null;
    duration: number | null = null;
    oldOwner: string | null = null;
    owner: string | null = null;
}

class PartitionedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    oldRegionId: RegionId | null = null;
    newRegionIds: [RegionId, RegionId] | null = null;
}

class InterlacedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    oldRegionId: RegionId | null = null;
    newRegionIds: [RegionId, RegionId] | null = null;
}

class AssignedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    regionId: RegionId | null = null;
    duration: number | null = null;
    task: number | null = null;
}

class PooledEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    regionId: RegionId | null = null;
    duration: number | null = null;
}

class CoreCountRequestedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    coreCount: number | null = null;
}

class CoreCountChangedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    coreCount: number | null = null;
}

class ReservationMadeEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    index: number | null = null;
    workload: ScheduleItem[] | null = null;
}

class ReservationCancelledEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    index: number | null = null;
    workload: ScheduleItem[] | null = null;
}

class LeasedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    task: number | null = null;
    until: number | null = null;
}

class LeaseEndingEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    task: number | null = null;
    when: number | null = null;
}

class RevenueClaimBegunEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    region: RegionId | null = null;
    maxTimeslices: number | null = null;
}

class RevenueClaimItemEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    when: number | null = null;
    amount: bigint | null = null;
}

class RevenueClaimPaidEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    who: string | null = null;
    amount: bigint | null = null;
    next: RegionId | null | null = null;
}

class CreditPurchasedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    who: string | null = null;
    beneficiary: string | null = null;
    amount: bigint | null = null;
}

class RegionDroppedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    regionId: RegionId | null = null;
    duration: number | null = null;
}

class ContributionDroppedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    regionId: RegionId | null = null;
}

class HistoryDroppedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    when: number | null = null;
    revenue: bigint | null = null;
}

class HistoryIgnoredEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    when: number | null = null;
    revenue: bigint | null = null;
}

class ClaimsReadyEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    when: number | null = null;
    systemPayout: bigint | null = null;
    privatePayout: bigint | null = null;
}

class CoreAssignedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    core: number | null = null;
    when: number | null = null;
    assignment: [CoreAssignment, number][] | null = null;
}

class AllowedRenewalDroppedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    when: number | null = null;
    core: number | null = null;
}


// Export all classs
export {
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
    AllowedRenewalDroppedEvent
}

