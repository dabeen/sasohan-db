import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Posts } from "./posts.entity";
import { User } from "./user.entity";

@Entity()
export class Resolver {
  @PrimaryColumn()
  post_id: string;

  @Column()
  user_id: string;

  @ManyToOne(type => User, user => user.resolver, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE"
  })
  @JoinColumn([
    {name: "user_id", referencedColumnName: "user_id"}
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