import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { DividendReserve, DividendReserveLoadMatch, DividendReserveCreateData } from '../TaxleyCorporationTaxTypes';
declare class DividendReserveEntity extends TaxleyCorporationTaxEntityBase<DividendReserve> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: DividendReserveEntity): DividendReserveEntity;
    load(this: any, reqmatch?: DividendReserveLoadMatch, ctrl?: Control): Promise<DividendReserveEntity>;
    create(this: any, reqdata?: DividendReserveCreateData, ctrl?: Control): Promise<DividendReserveEntity>;
}
export { DividendReserveEntity };
