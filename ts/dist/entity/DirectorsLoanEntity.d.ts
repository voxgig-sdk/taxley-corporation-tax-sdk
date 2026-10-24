import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { DirectorsLoan, DirectorsLoanLoadMatch, DirectorsLoanCreateData } from '../TaxleyCorporationTaxTypes';
declare class DirectorsLoanEntity extends TaxleyCorporationTaxEntityBase<DirectorsLoan> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: DirectorsLoanEntity): DirectorsLoanEntity;
    load(this: any, reqmatch?: DirectorsLoanLoadMatch, ctrl?: Control): Promise<DirectorsLoanEntity>;
    create(this: any, reqdata?: DirectorsLoanCreateData, ctrl?: Control): Promise<DirectorsLoanEntity>;
}
export { DirectorsLoanEntity };
