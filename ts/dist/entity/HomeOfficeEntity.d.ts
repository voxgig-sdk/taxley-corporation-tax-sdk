import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { HomeOffice, HomeOfficeLoadMatch, HomeOfficeCreateData } from '../TaxleyCorporationTaxTypes';
declare class HomeOfficeEntity extends TaxleyCorporationTaxEntityBase<HomeOffice> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: HomeOfficeEntity): HomeOfficeEntity;
    load(this: any, reqmatch?: HomeOfficeLoadMatch, ctrl?: Control): Promise<HomeOfficeEntity>;
    create(this: any, reqdata?: HomeOfficeCreateData, ctrl?: Control): Promise<HomeOfficeEntity>;
}
export { HomeOfficeEntity };
