import { Timepoint } from "./helper"

class ResultType {
    kind: string | null = null;
}
class NewMultisigEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    approving: string | null = null;
    multisig: string | null = null;
    callHash?: string | null = null;
}

class MultisigApprovalEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    approving: string | null = null;
    timepoint: Timepoint = new Timepoint();
    callHash?: string | null = null;
}

class MultisigExecutedEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    approving: string | null = null;
    timepoint: Timepoint = new Timepoint();
    multisig: string | null = null;
    callHash?: string | null = null;
    result: ResultType = new ResultType();

}

class MultisigCancelledEvent {
    id: string | null = null;
    blockNumber: number | null = null;
    timestamp: Date | null = null;
    cancelling: string | null = null;
    timepoint: Timepoint = new Timepoint();
    multisig: string | null = null;
    callHash?: string | null = null;
}


export {
    NewMultisigEvent,
    MultisigApprovalEvent,
    MultisigExecutedEvent,
    MultisigCancelledEvent
}
