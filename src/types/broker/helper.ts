class Assignment {
    kind: string | null
    value: number | null

    constructor() {
        this.kind = '';
        this.value = 0;
    }
}

class ScheduleItem {
    mask: string | null;
    assignment: Assignment;

    constructor() {
        this.mask = '';
        this.assignment = new Assignment();
    }
}

class ConfigRecord {
    advanceNotice: number | null
    interludeLength: number | null
    leadinLength: number | null
    regionLength: number | null
    idealBulkProportion: number | null
    limitCoresOffered: number | null
    renewalBump: number | null
    contributionTimeout: number | null

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
    begin: number | null
    core: number | null
    mask: string | null

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
    kind: string | null = null;
    value: number | null = null;
}

class CoreAssignment_Wrap {
    assignment: CoreAssignment = new CoreAssignment();
    value: number | null = null;
}

class Timepoint {
    height: number | null
    index: number | null

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
    CoreAssignment_Wrap,
    Timepoint
}