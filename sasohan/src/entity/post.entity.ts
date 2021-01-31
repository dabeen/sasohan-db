import { Column, Entity, EntitySchema, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Category } from "./category.entity";
import { ChatRoom } from "./chat-room.entity";
import { User } from "./user.entity";

@Entity()
export class Post {
  @PrimaryColumn({type: "varchar"})
  post_id: string;

  @Column({type: "varchar", nullable: false})
  user_id: string;

  @Column({type: "varchar", nullable: false})
  title: string;

  @Column({type: "varchar", nullable: false})
  body: string;

  @Column({type: "varchar"})
  image: string;

  @Column({type: "boolean", default: false})
  visit: boolean;

  @Column({type: "varchar", nullable: false})
  category_id: string;

  @Column({type: "int", nullable: false})
  price: number;

  @Column({type: "varchar", nullable: false})
  created_at: string;

  @Column({type: "boolean", default: false})
  complete: boolean;

  @ManyToOne(type => Category, cateory => cateory.posts, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE"
  })
  @JoinColumn([
    {name: "category_id", referencedColumnName: "category_id"}
  ])
  category: Category;

  @ManyToOne(type => User, user => user.posts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn([
    {name: "user_id", referencedColumnName: "user_id"}
  ])
  user: User;

  @OneToMany(() => ChatRoom, chatRoom => chatRoom.post)
  chatRooms: ChatRoom[];


}
