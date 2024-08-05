import { Timepoint } from "./helper"

class ResultType {
    kind: string | undefined = undefined;
}
class NewMultisigEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    approving: string | undefined = undefined;
    multisig: string | undefined = undefined;
    callHash?: string | undefined = undefined;
}

class MultisigApprovalEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    approving: string | undefined = undefined;
    timepoint: Timepoint = new Timepoint();
    callHash?: string | undefined = undefined;
}

class MultisigExecutedEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    approving: string | undefined = undefined;
    timepoint: Timepoint = new Timepoint();
    multisig: string | undefined = undefined;
    callHash?: string | undefined = undefined;
    result: ResultType = new ResultType();
}

class MultisigCancelledEvent {
    id: string | undefined = undefined;
    blockNumber: number | undefined = undefined;
    timestamp: Date | undefined = undefined;
    cancelling: string | undefined = undefined;
    timepoint: Timepoint = new Timepoint();
    multisig: string | undefined = undefined;
    callHash?: string | undefined = undefined;
}


export {
    NewMultisigEvent,
    MultisigApprovalEvent,
    MultisigExecutedEvent,
    MultisigCancelledEvent
}
