import { RegionId, ScheduleItem, ConfigRecord } from "./helper";

class ConfigureCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    config: ConfigRecord = new ConfigRecord();
}

class ReserveCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    workload: ScheduleItem[] = [];
    
    constructor() {
        this.workload.push(new ScheduleItem());
    }
}

class UnreserveCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    itemIndex: number | undefined = undefined;
}

class SetLeaseCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    task: number | undefined = undefined;
    until: number | undefined = undefined;
}

class StartSalesCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    initialPrice: bigint | undefined = undefined;
    coreCount: number | undefined = undefined;
}

class PurchaseCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    priceLimit: bigint | undefined = undefined;
}

class RenewCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    core: number | undefined = undefined;
}

class TransferCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    regionId: RegionId = new RegionId();
    newOwner: string | undefined = undefined;
}

class PartitionCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    regionId: RegionId = new RegionId();
    pivot: number | undefined = undefined;
}

class InterlaceCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    regionId: RegionId = new RegionId();
    pivot: string | undefined = undefined;
}

class AssignCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    regionId: RegionId = new RegionId();
    task: number | undefined = undefined;
    finality: string | undefined = undefined;
}

class PoolCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    regionId: RegionId = new RegionId();
    payee: string | undefined = undefined;
    finality: string | undefined = undefined;
}

class ClaimRevenueCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    regionId: RegionId = new RegionId();
    maxTimeslices: number | undefined = undefined;
}

class PurchaseCreditCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    amount: bigint | undefined = undefined;
    beneficiary: string | undefined = undefined;
}

class DropRegionCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    regionId: RegionId = new RegionId();
}

class DropContributionCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    regionId: RegionId = new RegionId();
}

class DropHistoryCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    when: number | undefined = undefined;
}

class DropRenewalCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    core: number | undefined = undefined;
    when: number | undefined = undefined;
}

class RequestCoreCountCall {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    extrinsicHash?: string | undefined = undefined;
    coreCount: number | undefined = undefined;
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
