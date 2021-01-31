import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Post } from "./post.entity";
import { User } from "./user.entity";

@Entity()
export class Resolver {
  @PrimaryColumn()
  post_id: string;

  @Column()
  user_id: string;

  @OneToOne(() => User,{
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn([
    { name: "user_id", referencedColumnName: "user_id"}
  ])
  user: User;

  @OneToOne(() => Post,{
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION"
  })
  @JoinColumn([
    { name: "post_id", referencedColumnName: "post_id"}
  ])
  post: Post;

}