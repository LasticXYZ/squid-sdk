import { ConfigRecord, ScheduleItem, RegionId, CoreMask, Finality } from "./v9430"

class ConfigureCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    config: ConfigRecord | null = null;
}

class ReserveCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    workload: ScheduleItem[] | null = null;
}

class UnreserveCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    itemIndex: number | null = null;
}

class SetLeaseCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    task: number | null = null;
    until: number | null = null;
}

class StartSalesCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    initialPrice: bigint | null = null;
    coreCount: number | null = null;
}

class PurchaseCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    priceLimit: bigint | null = null;
}

class RenewCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    core: number | null = null;
}

class TransferCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    regionId: RegionId | null = null;
    newOwner: string | null = null;
}

class PartitionCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    regionId: RegionId | null = null;
    pivot: number | null = null;
}

class InterlaceCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    regionId: RegionId | null = null;
    pivot: CoreMask | null = null;
}

class AssignCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    regionId: RegionId | null = null;
    task: number | null = null;
    finality: Finality | null = null;
}

class PoolCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    regionId: RegionId | null = null;
    payee: string | null = null;
    finality: Finality | null = null;
}

class ClaimRevenueCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    regionId: RegionId | null = null;
    maxTimeslices: number | null = null;
}

class PurchaseCreditCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    amount: bigint | null = null;
    beneficiary: string | null = null;
}

class DropRegionCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    regionId: RegionId | null = null;
}

class DropContributionCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    regionId: RegionId | null = null;
}

class DropHistoryCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    when: number | null = null;
}

class DropRenewalCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    core: number | null = null;
    when: number | null = null;
}

class RequestCoreCountCall {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    extrinsicHash?: string | null = null;
    coreCount: number | null = null;
}

// Export all classs
export {
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
}
