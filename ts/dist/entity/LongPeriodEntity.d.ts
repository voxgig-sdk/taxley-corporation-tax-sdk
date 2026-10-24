import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { LongPeriod, LongPeriodLoadMatch, LongPeriodCreateData } from '../TaxleyCorporationTaxTypes';
declare class LongPeriodEntity extends TaxleyCorporationTaxEntityBase<LongPeriod> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: LongPeriodEntity): LongPeriodEntity;
    load(this: any, reqmatch?: LongPeriodLoadMatch, ctrl?: Control): Promise<LongPeriodEntity>;
    create(this: any, reqdata?: LongPeriodCreateData, ctrl?: Control): Promise<LongPeriodEntity>;
}
export { LongPeriodEntity };
