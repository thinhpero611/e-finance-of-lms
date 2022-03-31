import { SorterResult } from "antd/lib/table/interface";
import { IFilterTicketProps } from "../../view/Magage/components/FilterButton";

export class OptionEntity {
    search?: string;
    filter?: { [propName: string]: string | number } | IFilterTicketProps;
    sorter?: SorterResult<any>;
    constructor(option) {
        if (option == null) return;
        Object.assign(this, option);    
    }
}
