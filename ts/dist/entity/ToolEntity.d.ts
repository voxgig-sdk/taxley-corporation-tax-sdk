import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { Tool, ToolLoadMatch } from '../TaxleyCorporationTaxTypes';
declare class ToolEntity extends TaxleyCorporationTaxEntityBase<Tool> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: ToolEntity): ToolEntity;
    load(this: any, reqmatch?: ToolLoadMatch, ctrl?: Control): Promise<ToolEntity>;
}
export { ToolEntity };
