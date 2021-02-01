export class PostsDto {

  post_id?: string;
  title!: string;
  body: string;
  image?: string;
  visit!: boolean;
  category_id?: string;
  price!: number;
  created_at: string;
  complete!: boolean;

}