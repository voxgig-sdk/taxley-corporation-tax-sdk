import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { MileageAllowance, MileageAllowanceLoadMatch, MileageAllowanceCreateData } from '../TaxleyCorporationTaxTypes';
declare class MileageAllowanceEntity extends TaxleyCorporationTaxEntityBase<MileageAllowance> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: MileageAllowanceEntity): MileageAllowanceEntity;
    load(this: any, reqmatch?: MileageAllowanceLoadMatch, ctrl?: Control): Promise<MileageAllowanceEntity>;
    create(this: any, reqdata?: MileageAllowanceCreateData, ctrl?: Control): Promise<MileageAllowanceEntity>;
}
export { MileageAllowanceEntity };
