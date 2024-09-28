import { RegionId, ScheduleItem, NewRegionIds, CoreAssignmentWrap } from './helper';

class HistoryInitializedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    when: number | undefined = undefined;
    privatePoolSize: number | undefined = undefined;
    systemPoolSize: number | undefined = undefined;
}

class SaleInitializedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    saleStart: number | undefined = undefined;
    leadinLength: number | undefined = undefined;
    startPrice: string | undefined = undefined;
    regularPrice: string | undefined = undefined;
    regionBegin: number | undefined = undefined;
    regionEnd: number | undefined = undefined;
    idealCoresSold: number | undefined = undefined;
    coresOffered: number | undefined = undefined;
}

class SalesStartedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    price: string | undefined = undefined;
    coreCount: number | undefined = undefined;
}

class PurchasedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    who: string | undefined = undefined;
    regionId: RegionId = new RegionId();
    price: string | undefined = undefined;
    duration: number | undefined = undefined;
}

class CoreOwnerEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    owner: string | undefined = undefined;
    regionId: RegionId = new RegionId();
    price: string | undefined = undefined;
    duration: number | undefined = undefined;
    pooled: boolean | undefined = undefined;
    assigned: boolean | undefined = undefined;
    task: number | undefined = undefined;
}


class RenewableEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    core: number | undefined = undefined;
    price: string | undefined = undefined;
    begin: number | undefined = undefined;
    workload: ScheduleItem[] = [];

    constructor() {
        this.workload.push(new ScheduleItem());
    }
}

class RenewedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    who: string | undefined = undefined;
    price: string | undefined = undefined;
    oldCore: number | undefined = undefined;
    core: number | undefined = undefined;
    begin: number | undefined = undefined;
    duration: number | undefined = undefined;
    workload: ScheduleItem[] = [];

    constructor() {
        this.workload.push(new ScheduleItem());
    }
}

class TransferredEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    regionId: RegionId = new RegionId();
    duration: number | undefined = undefined;
    oldOwner: string | undefined = undefined;
    owner: string | undefined = undefined;
}

class PartitionedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    oldRegionId: RegionId = new RegionId();
    newRegionIds: NewRegionIds = new NewRegionIds();
}

class InterlacedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    oldRegionId: RegionId = new RegionId();
    newRegionIds: NewRegionIds = new NewRegionIds();
}

class AssignedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    regionId: RegionId = new RegionId();
    duration: number | undefined = undefined;
    task: number | undefined = undefined;
}

class PooledEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    regionId: RegionId = new RegionId();
    duration: number | undefined = undefined;
}

class CoreCountRequestedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    coreCount: number | undefined = undefined;
}

class CoreCountChangedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    coreCount: number | undefined = undefined;
}

class ReservationMadeEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    index: number | undefined = undefined;
    workload: ScheduleItem[] = [];

    constructor() {
        this.workload.push(new ScheduleItem());
    }}

class ReservationCancelledEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    index: number | undefined = undefined;
    workload: ScheduleItem[] = [];

    constructor() {
        this.workload.push(new ScheduleItem());
    }
}

class LeasedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    task: number | undefined = undefined;
    until: number | undefined = undefined;
}

class LeaseEndingEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    task: number | undefined = undefined;
    when: number | undefined = undefined;
}

class RevenueClaimBegunEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    region: RegionId = new RegionId();
    maxTimeslices: number | undefined = undefined;
}

class RevenueClaimItemEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    who: string | undefined = undefined;
    amount: bigint | undefined = undefined;
}

class RevenueClaimPaidEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    who: string | undefined = undefined;
    amount: bigint | undefined = undefined;
    next: number | undefined = undefined;
}

class CreditPurchasedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    who: string | undefined = undefined;
    beneficiary: string | undefined = undefined;
    amount: bigint | undefined = undefined;
}

class RegionDroppedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    regionId: RegionId = new RegionId();
    duration: number | undefined = undefined;
}

class ContributionDroppedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    regionId: RegionId = new RegionId();
}

class HistoryDroppedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    when: number | undefined = undefined;
    revenue: bigint | undefined = undefined;
}

class HistoryIgnoredEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    when: number | undefined = undefined;
    revenue: bigint | undefined = undefined;
}

class ClaimsReadyEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    when: number | undefined = undefined;
    systemPayout: bigint | undefined = undefined;
    privatePayout: bigint | undefined = undefined;
}

class CoreAssignedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    core: number | undefined = undefined;
    when: number | undefined = undefined;
    assignment: CoreAssignmentWrap[] = [];

    constructor() {
        this.assignment.push(new CoreAssignmentWrap());
    }
}

class AllowedRenewalDroppedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    when: number | undefined = undefined;
    core: number | undefined = undefined;
}


// Export all classs
export {
    CoreOwnerEvent,
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

