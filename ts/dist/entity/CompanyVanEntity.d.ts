import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { CompanyVan, CompanyVanLoadMatch, CompanyVanCreateData } from '../TaxleyCorporationTaxTypes';
declare class CompanyVanEntity extends TaxleyCorporationTaxEntityBase<CompanyVan> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: CompanyVanEntity): CompanyVanEntity;
    load(this: any, reqmatch?: CompanyVanLoadMatch, ctrl?: Control): Promise<CompanyVanEntity>;
    create(this: any, reqdata?: CompanyVanCreateData, ctrl?: Control): Promise<CompanyVanEntity>;
}
export { CompanyVanEntity };
