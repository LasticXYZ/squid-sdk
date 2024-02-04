
import { CoreAssignment, ScheduleItem, RegionId, AccountId32 } from "./v9430"

interface HistoryInitializedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    when: number;
    privatePoolSize: number;
    systemPoolSize: number;
}

interface SaleInitializedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    saleStart: number;
    leadinLength: number;
    startPrice: bigint;
    regularPrice: bigint;
    regionBegin: number;
    regionEnd: number;
    idealCoresSold: number;
    coresOffered: number;
}

interface SalesStartedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    price: bigint;
    coreCount: number;
}

interface PurchasedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    who: string;
    regionId: RegionId;
    price: bigint;
    duration: number;
}

interface RenewableEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    core: number;
    price: bigint;
    begin: number;
    workload: ScheduleItem[];
}

interface RenewedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    who: string;
    price: bigint;
    oldCore: number;
    core: number;
    begin: number;
    duration: number;
    workload: ScheduleItem[];
}

interface TransferredEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    regionId: RegionId;
    duration: number;
    oldOwner: string;
    owner: string;
}

interface PartitionedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    oldRegionId: RegionId;
    newRegionIds: [RegionId, RegionId];
}

interface InterlacedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    oldRegionId: RegionId;
    newRegionIds: [RegionId, RegionId];
}

interface AssignedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    regionId: RegionId;
    duration: number;
    task: number;
}

interface PooledEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    regionId: RegionId;
    duration: number;
}

interface CoreCountRequestedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    coreCount: number;
}

interface CoreCountChangedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    coreCount: number;
}

interface ReservationMadeEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    index: number;
    workload: ScheduleItem[];
}

interface ReservationCancelledEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    index: number;
    workload: ScheduleItem[];
}

interface LeasedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    task: number;
    until: number;
}

interface LeaseEndingEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    task: number;
    when: number;
}

interface RevenueClaimBegunEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    region: RegionId;
    maxTimeslices: number;
}

interface RevenueClaimItemEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    when: number;
    amount: bigint;
}

interface RevenueClaimPaidEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    who: string;
    amount: bigint;
    next: RegionId | null;
}

interface CreditPurchasedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    who: string;
    beneficiary: string;
    amount: bigint;
}

interface RegionDroppedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    regionId: RegionId;
    duration: number;
}

interface ContributionDroppedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    regionId: RegionId;
}

interface HistoryDroppedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    when: number;
    revenue: bigint;
}

interface HistoryIgnoredEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    when: number;
    revenue: bigint;
}

interface ClaimsReadyEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    when: number;
    systemPayout: bigint;
    privatePayout: bigint;
}

interface CoreAssignedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    core: number;
    when: number;
    assignment: [CoreAssignment, number][];
}

interface AllowedRenewalDroppedEvent {
    id: string;
    blockNumber: number;
    timestamp: Date;
    when: number;
    core: number;
}


// Export all interfaces
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

