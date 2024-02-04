import { ConfigRecord, ScheduleItem, RegionId, AccountId32, CoreMask, Finality } from "./v9430";

interface ConfigureCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    config: ConfigRecord;
}

interface ReserveCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    workload: ScheduleItem[];
}

interface UnreserveCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    itemIndex: number;
}

interface SetLeaseCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    task: number;
    until: number;
}

interface StartSalesCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    initialPrice: bigint;
    coreCount: number;
}

interface PurchaseCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    priceLimit: bigint;
}

interface RenewCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    core: number;
}

interface TransferCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    regionId: RegionId;
    newOwner: string;
}

interface PartitionCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    regionId: RegionId;
    pivot: number;
}

interface InterlaceCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    regionId: RegionId;
    pivot: CoreMask;
}

interface AssignCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    regionId: RegionId;
    task: number;
    finality: Finality;
}

interface PoolCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    regionId: RegionId;
    payee: string;
    finality: Finality;
}

interface ClaimRevenueCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    regionId: RegionId;
    maxTimeslices: number;
}

interface PurchaseCreditCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    amount: bigint;
    beneficiary: string;
}

interface DropRegionCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    regionId: RegionId;
}

interface DropContributionCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    regionId: RegionId;
}

interface DropHistoryCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    when: number;
}

interface DropRenewalCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    core: number;
    when: number;
}

interface RequestCoreCountCall {
    id: string;
    blockNumber: number;
    timestamp: Date;
    extrinsicHash?: string;
    coreCount: number;
}

// Export all interfaces
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
