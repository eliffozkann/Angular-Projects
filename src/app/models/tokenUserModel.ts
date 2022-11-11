//json2tl CTRL+ALT+V

export interface Role {
  id: number;
  userId: number;
  roleId: number;
}

export interface TokenUserModel {
  id: number;
  userName: string;
  role: Role[];
  // iat:number;
  // exp:number;
}
