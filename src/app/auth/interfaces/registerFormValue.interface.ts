import { IRegisterRequest } from './registerRequest.interface';

export interface IRegisterFormValue
  extends Omit<IRegisterRequest, 'phone'> {}
