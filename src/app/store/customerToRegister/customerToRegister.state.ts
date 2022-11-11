import { Catalog } from 'src/app/models/catalog';
import { CorporateCustomer } from 'src/app/models/corporateCustomer';
import { Customer } from 'src/app/models/customer';
import { IndividualCustomer } from 'src/app/models/individualCustomer';

export interface CustomerToRegisterState {
  customer: Customer | null;
  individualCustomer: IndividualCustomer | null;
  corporateCustomer: CorporateCustomer | null;
  catalog: Catalog | null;
  // customerType:number
}

export const initialCustomerToRegisterState: CustomerToRegisterState = {
  customer: null,
  individualCustomer: null,
  corporateCustomer: null,
  catalog: null,
  // customerType:0
};
