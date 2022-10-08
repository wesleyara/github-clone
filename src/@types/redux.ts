import { IUser } from "./user";

interface IAuthState {
  name: string;
  isLogged: boolean;
}

interface IUserState {
  data: IUser;
  isLogged: boolean;
}

export interface IState {
  auth: IAuthState;
  user: IUserState;
}
