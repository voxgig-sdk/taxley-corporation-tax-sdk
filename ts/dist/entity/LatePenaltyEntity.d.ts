import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { LatePenalty, LatePenaltyLoadMatch, LatePenaltyCreateData } from '../TaxleyCorporationTaxTypes';
declare class LatePenaltyEntity extends TaxleyCorporationTaxEntityBase<LatePenalty> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: LatePenaltyEntity): LatePenaltyEntity;
    load(this: any, reqmatch?: LatePenaltyLoadMatch, ctrl?: Control): Promise<LatePenaltyEntity>;
    create(this: any, reqdata?: LatePenaltyCreateData, ctrl?: Control): Promise<LatePenaltyEntity>;
}
export { LatePenaltyEntity };
