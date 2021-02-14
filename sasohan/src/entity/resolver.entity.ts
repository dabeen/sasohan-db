import { Post } from "@nestjs/common";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Posts } from "./posts.entity";
import { User } from "./user.entity";

@Entity()
export class Resolver {
  
  @PrimaryGeneratedColumn("uuid")
  resolver_id : string;

  @Column()
  post_id : string;

  @Column()
  user_id : string;

  @ManyToOne(() => User, user => user.resolver, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE"
  })
  @JoinColumn([
    {name: "user_id", referencedColumnName: "user_id"}
  ])
  user: User;

  @ManyToOne(() => Posts, posts => posts.resolver, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn([
    {name: "post_id", referencedColumnName: "post_id"}
  ])
  posts: Posts;



}