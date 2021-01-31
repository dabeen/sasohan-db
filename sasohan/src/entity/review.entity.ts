import { Resolver } from "./resolver.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity()
export class Review {
  @PrimaryColumn()
  review_id: string;

  @Column()
  user_id: string;

  @Column()
  post_id: string;

  @Column()
  body: string;

  @Column()
  created_at: string;

  @Column()
  point: number;

  @OneToOne(() => Resolver,{
    onDelete: "SET NULL",
    onUpdate: "CASCADE"
  })
  @JoinColumn([
    { name: "user_id", referencedColumnName: "user_id"}
  ])
  resolver: Resolver

  @OneToOne(() => Resolver,{
    onDelete: "SET NULL",
    onUpdate: "NO ACTION"
  })
  @JoinColumn([
    { name: "post_id", referencedColumnName: "post_id"}
  ])
  resolvr: Resolver

}