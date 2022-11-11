import { createAction, props } from '@ngrx/store';
import { Catalog } from 'src/app/models/catalog';
import { CorporateCustomer } from 'src/app/models/corporateCustomer';
import { Customer } from 'src/app/models/customer';
import { IndividualCustomer } from 'src/app/models/individualCustomer';

export const setCustomerToRegister = createAction(
  '[CustomerToRegister] Set Customer To Register Model', //: Benzersiz key verdik. Bu action type/id olucak.
  props<{ customerModel: Customer }>() //: inline bir interface yazdık.
  //     //: Bu interface'in içindeki property'ler, action'ın içindeki property'ler/payload olucak.
);

export const setIndivCustomerToRegister = createAction(
  '[IndividualCustomerToRegister] Set Individual Customer To Register Model',
  props<{ individualCustomerModel: IndividualCustomer }>()
);

export const setCorpoCustomerToRegister = createAction(
  '[CorporateCustomerToRegister] Set Corporate Customer To Register Model',
  props<{ corporateCustomerModel: CorporateCustomer }>()
);

export const setCatalogToRegister = createAction(
  '[CatalogToRegister] Set Corporate Customer To Register Model',
  props<{ catalogRegisterModel: Catalog }>()
);

// //   export const deleteTokenUserModel = createAction(
// //     '[Auth] Delete Token User Model'
// //   );

// import { Action } from '@ngrx/store';
// export const ADD_USER= '[User] Add_User';
// export class AddUserAction implements Action{
//   readonly type = ADD_USER;
//   constructor( public payload: string) { }
// }export type actions = AddUserAction
