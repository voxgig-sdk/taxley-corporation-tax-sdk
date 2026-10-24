import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { CompanyCar, CompanyCarLoadMatch, CompanyCarCreateData } from '../TaxleyCorporationTaxTypes';
declare class CompanyCarEntity extends TaxleyCorporationTaxEntityBase<CompanyCar> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: CompanyCarEntity): CompanyCarEntity;
    load(this: any, reqmatch?: CompanyCarLoadMatch, ctrl?: Control): Promise<CompanyCarEntity>;
    create(this: any, reqdata?: CompanyCarCreateData, ctrl?: Control): Promise<CompanyCarEntity>;
}
export { CompanyCarEntity };
