import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { Deadline, DeadlineLoadMatch, DeadlineCreateData } from '../TaxleyCorporationTaxTypes';
declare class DeadlineEntity extends TaxleyCorporationTaxEntityBase<Deadline> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: DeadlineEntity): DeadlineEntity;
    load(this: any, reqmatch?: DeadlineLoadMatch, ctrl?: Control): Promise<DeadlineEntity>;
    create(this: any, reqdata?: DeadlineCreateData, ctrl?: Control): Promise<DeadlineEntity>;
}
export { DeadlineEntity };
