import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { SoleTraderVsLimited, SoleTraderVsLimitedLoadMatch, SoleTraderVsLimitedCreateData } from '../TaxleyCorporationTaxTypes';
declare class SoleTraderVsLimitedEntity extends TaxleyCorporationTaxEntityBase<SoleTraderVsLimited> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: SoleTraderVsLimitedEntity): SoleTraderVsLimitedEntity;
    load(this: any, reqmatch?: SoleTraderVsLimitedLoadMatch, ctrl?: Control): Promise<SoleTraderVsLimitedEntity>;
    create(this: any, reqdata?: SoleTraderVsLimitedCreateData, ctrl?: Control): Promise<SoleTraderVsLimitedEntity>;
}
export { SoleTraderVsLimitedEntity };
