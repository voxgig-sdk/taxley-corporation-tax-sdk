import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { CapitalAllowance, CapitalAllowanceLoadMatch, CapitalAllowanceCreateData } from '../TaxleyCorporationTaxTypes';
declare class CapitalAllowanceEntity extends TaxleyCorporationTaxEntityBase<CapitalAllowance> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: CapitalAllowanceEntity): CapitalAllowanceEntity;
    load(this: any, reqmatch?: CapitalAllowanceLoadMatch, ctrl?: Control): Promise<CapitalAllowanceEntity>;
    create(this: any, reqdata?: CapitalAllowanceCreateData, ctrl?: Control): Promise<CapitalAllowanceEntity>;
}
export { CapitalAllowanceEntity };
