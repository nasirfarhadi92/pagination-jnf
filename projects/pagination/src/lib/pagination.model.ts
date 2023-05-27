export interface PaginationConfigIndividualModel {
    rtlMode?: boolean;
    classes?: {
        parentClass?: string;
        parentListClass?: string;
        itemClass?: string;
        itemSpaceClass?: string;
        itemArrowClass?: string;
    },
    arrow?: {
        next?: string;
        prev?: string;
    }
}

export interface PaginationConfigValueModel {
    totalCount: number;
    pageSize: number;
}