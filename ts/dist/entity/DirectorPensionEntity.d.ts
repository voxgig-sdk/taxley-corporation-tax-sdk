import { TaxleyCorporationTaxEntityBase } from '../TaxleyCorporationTaxEntityBase';
import type { TaxleyCorporationTaxSDK } from '../TaxleyCorporationTaxSDK';
import type { Control } from '../types';
import type { DirectorPension, DirectorPensionLoadMatch, DirectorPensionCreateData } from '../TaxleyCorporationTaxTypes';
declare class DirectorPensionEntity extends TaxleyCorporationTaxEntityBase<DirectorPension> {
    constructor(client: TaxleyCorporationTaxSDK, entopts: any);
    make(this: DirectorPensionEntity): DirectorPensionEntity;
    load(this: any, reqmatch?: DirectorPensionLoadMatch, ctrl?: Control): Promise<DirectorPensionEntity>;
    create(this: any, reqdata?: DirectorPensionCreateData, ctrl?: Control): Promise<DirectorPensionEntity>;
}
export { DirectorPensionEntity };
