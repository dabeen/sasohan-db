export class UserConnectionDTO {

  user_id !: string;
  connected_at !: number;
  connection_status !: boolean;

}

export class UpdateUserConnectionDTO {

  connected_at ?: number;
  connection_status ?: boolean;

}