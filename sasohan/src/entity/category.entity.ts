import { type } from "os";
import { Column, Entity, EntitySchema, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity()
export class Category {
  @PrimaryColumn({type: "varchar"})
  category_id: string;

  @Column({type: "varchar", nullable: false})
  category_name: string;

  @OneToMany(() => Post, post => post.category)
  posts: Post[];

}
