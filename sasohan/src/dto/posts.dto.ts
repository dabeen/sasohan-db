export class PostsDTO {

  post_id !: string;
  user_id !: string;
  title !: string;
  body !: string;
  image ?: string;
  visit !: boolean;
  category_id !: string;
  price !: number;
  created_at !: number;
  complete !: boolean;
  location_x : string;
  location_y : string;
}

export class UpdatePostsDTO {

  title ?: string;
  body ?: string;
  image ?: string;
  visit ?: boolean;
  price ?: number;
  complete ?: boolean;
  created_at?: number;
  x ?: string;
  y ?: string;

}