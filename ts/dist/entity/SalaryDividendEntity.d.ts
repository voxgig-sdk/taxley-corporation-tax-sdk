import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { SalaryDividend, SalaryDividendLoadMatch, SalaryDividendCreateData } from '../TaxleyCorporationTaxTypes';
declare class SalaryDividendEntity extends TaxleyCorporationTaxEntityBase<SalaryDividend> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: SalaryDividendEntity): SalaryDividendEntity;
    load(this: any, reqmatch?: SalaryDividendLoadMatch, ctrl?: Control): Promise<SalaryDividendEntity>;
    create(this: any, reqdata?: SalaryDividendCreateData, ctrl?: Control): Promise<SalaryDividendEntity>;
}
export { SalaryDividendEntity };
