// import * as UserActions from './customerToRegister.actions';
// function userReducer(state = AppState, action: UserActions) {
//   switch (action.type) {
//     case ADD_USER:
//       return [
//         ...state,
//         {
//           text: action.text
//         }
//       ]
//     default:
//       return state
//   }
// }

import {
  CustomerToRegisterState,
  initialCustomerToRegisterState,
} from './customerToRegister.state';
import { createReducer, on } from '@ngrx/store';
import {
  setCatalogToRegister,
  setCorpoCustomerToRegister,
  setCustomerToRegister,
  setIndivCustomerToRegister,
} from './customerToRegister.actions';

export const customerToRegisterReducer = createReducer<CustomerToRegisterState>(
  initialCustomerToRegisterState,
  on(
    setCustomerToRegister, //: yakalamak istediğim action
    (currentState, action) => {
      console.log(action);
      //: yakaladığım action ile ne yapacağımı belirliyorum. store'taki ilgili state'i güncelliyorum
      //: store'daki state'i güncellemek için referansının değişmesi gerekir.
      //! currentState.tokenUserModel = action.tokenUserModel;
      //: Çünkü componentler state'lerin stack adreslerini izliyorlar. Referans değişmediği sürece, componentler state'i günellenmiş olarak görmeyecektir.
      return {
        ...currentState,
        customerToRegister: action.customerModel,
      };
    }
  ),

  on(setIndivCustomerToRegister, (currentState, action) => {
    console.log(action);
    return {
      ...currentState,
      individualCustomer: action.individualCustomerModel,
    };
  }),

  on(setCorpoCustomerToRegister, (currentState, action) => {
    console.log(action);
    return {
      ...currentState,
      corporateCustomer: action.corporateCustomerModel,
    };
  }),

  on(setCatalogToRegister, (currentState, action) => {
    console.log(action);
    return {
      ...currentState,
      catalog: action.catalogRegisterModel,
    };
  })

  // on(deleteTokenUserModel, (currentState) => {
  //   return {
  //     ...currentState,
  //     tokenUserModel: null, // 0x1234 (hexadecimal) -> 0
  //   };
  // })

  // on(addRole, (state, action) => {
  //! currentState.roles.push(action.role);
  // return { ...currentState, roles: [...currentState.roles, action.role] };
  // }),
);
