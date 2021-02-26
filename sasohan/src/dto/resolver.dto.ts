import { IsString } from "class-validator";

export class ResolverDTO {
  
  @IsString()
  user_id !: string;
  @IsString()
  post_id !: string;
}