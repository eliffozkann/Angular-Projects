import { ResponseModel } from './responseModel';

export interface TokenResponseModel extends ResponseModel {
  access_token: string;
  success: boolean;
}
