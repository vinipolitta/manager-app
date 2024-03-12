export interface ILogin {
  login: string;
  senha: string;
}

export interface IUser {
  id: Number;
  login: string;
  senha: string;
}

export interface ILoginResponse {
  token: string;
}
