import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { CorporationTax, CorporationTaxLoadMatch, CorporationTaxCreateData } from '../TaxleyCorporationTaxTypes';
declare class CorporationTaxEntity extends TaxleyCorporationTaxEntityBase<CorporationTax> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: CorporationTaxEntity): CorporationTaxEntity;
    load(this: any, reqmatch?: CorporationTaxLoadMatch, ctrl?: Control): Promise<CorporationTaxEntity>;
    create(this: any, reqdata?: CorporationTaxCreateData, ctrl?: Control): Promise<CorporationTaxEntity>;
}
export { CorporationTaxEntity };
