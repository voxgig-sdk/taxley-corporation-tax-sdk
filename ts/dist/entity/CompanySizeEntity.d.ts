import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { CompanySize, CompanySizeLoadMatch, CompanySizeCreateData } from '../TaxleyCorporationTaxTypes';
declare class CompanySizeEntity extends TaxleyCorporationTaxEntityBase<CompanySize> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: CompanySizeEntity): CompanySizeEntity;
    load(this: any, reqmatch?: CompanySizeLoadMatch, ctrl?: Control): Promise<CompanySizeEntity>;
    create(this: any, reqdata?: CompanySizeCreateData, ctrl?: Control): Promise<CompanySizeEntity>;
}
export { CompanySizeEntity };
