export class UserDTO {

  user_id : string;
  nickname : string;
  gender : string;
  birthday : string;
  age : number;
  point : number; 
  account_type: string;
}

export class UpdateUserDTO {

  gender : string;
  birthday : string;
  age : number;

}

export class UpdateUserPointDTO {
  point : number;
}