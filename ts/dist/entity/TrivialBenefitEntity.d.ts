import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { TrivialBenefit, TrivialBenefitLoadMatch, TrivialBenefitCreateData } from '../TaxleyCorporationTaxTypes';
declare class TrivialBenefitEntity extends TaxleyCorporationTaxEntityBase<TrivialBenefit> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: TrivialBenefitEntity): TrivialBenefitEntity;
    load(this: any, reqmatch?: TrivialBenefitLoadMatch, ctrl?: Control): Promise<TrivialBenefitEntity>;
    create(this: any, reqdata?: TrivialBenefitCreateData, ctrl?: Control): Promise<TrivialBenefitEntity>;
}
export { TrivialBenefitEntity };
