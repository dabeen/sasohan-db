import { type } from "os";
import { Column, Entity, EntitySchema, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Posts } from "./posts.entity";

@Entity()
export class Category {
  @PrimaryColumn({type: "varchar", unique: true })
  category_id: string;

  @Column({type: "varchar", nullable: false, })
  category_name: string;

  @OneToMany(() => Posts, post => post.category)
  post: Posts[];

}
