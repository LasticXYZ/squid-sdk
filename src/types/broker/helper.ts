class Assignment {
    kind: string | undefined
    value: number | undefined

    constructor() {
        this.kind = '';
        this.value = 0;
    }
}

class ScheduleItem {
    mask: string | undefined;
    assignment: Assignment;

    constructor() {
        this.mask = '';
        this.assignment = new Assignment();
    }
}

class ConfigRecord {
    advanceNotice: number | undefined
    interludeLength: number | undefined
    leadinLength: number | undefined
    regionLength: number | undefined
    idealBulkProportion: number | undefined
    limitCoresOffered: number | undefined
    renewalBump: number | undefined
    contributionTimeout: number | undefined

    constructor() {
        this.advanceNotice = 0;
        this.interludeLength = 0;
        this.leadinLength = 0;
        this.regionLength = 0;
        this.idealBulkProportion = 0;
        this.limitCoresOffered = 0;
        this.renewalBump = 0;
        this.contributionTimeout = 0;
    }
}

class RegionId {
    begin: number | undefined
    core: number | undefined
    mask: string | undefined

    constructor() {
        // Ensure properties are initialized in a way that allows type checking
        // For example, initializing with default values
        this.begin = 0;
        this.core = 0;
        this.mask = '';
    }
}

class NewRegionIds {
    first: RegionId = new RegionId();
    second: RegionId = new RegionId();
}

class CoreAssignment {
    kind: string | undefined = undefined;
    value: number | undefined = undefined;
}

class CoreAssignmentWrap {
    assignment: CoreAssignment = new CoreAssignment();
    value: number | undefined = undefined;
}

class Timepoint {
    height: number | undefined
    index: number | undefined

    constructor() {
        this.height = 0;
        this.index = 0;
    }
}


export {
    RegionId,
    ScheduleItem,
    Assignment,
    ConfigRecord,
    NewRegionIds,
    CoreAssignment,
    CoreAssignmentWrap,
    Timepoint
}