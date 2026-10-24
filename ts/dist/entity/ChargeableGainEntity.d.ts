import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { ChargeableGain, ChargeableGainLoadMatch, ChargeableGainCreateData } from '../TaxleyCorporationTaxTypes';
declare class ChargeableGainEntity extends TaxleyCorporationTaxEntityBase<ChargeableGain> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: ChargeableGainEntity): ChargeableGainEntity;
    load(this: any, reqmatch?: ChargeableGainLoadMatch, ctrl?: Control): Promise<ChargeableGainEntity>;
    create(this: any, reqdata?: ChargeableGainCreateData, ctrl?: Control): Promise<ChargeableGainEntity>;
}
export { ChargeableGainEntity };
