import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Posts } from "./posts.entity";
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

  @OneToOne(() => Posts,{
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION"
  })
  @JoinColumn([
    { name: "post_id", referencedColumnName: "post_id"}
  ])
  post: Posts;

}