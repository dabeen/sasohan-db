export class UserLocationDTO {

  user_id !: string;
  location_x ?: string;
  location_y ?: string;

}

export class UpdateUserLocationDTO {
  location_x ?: string;
  location_y ?: string;
}