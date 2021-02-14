
import { Column, Entity, EntitySchema, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";
import { ChatRoom } from "./chat-room.entity";
import { Resolver } from "./resolver.entity";
import { User } from "./user.entity";

@Entity()
export class Posts {
  @PrimaryGeneratedColumn("uuid")
  post_id: string;

  @Column({type: "varchar", nullable: false})
  user_id: string;

  @Column({type: "varchar", nullable: false})
  title: string;

  @Column({type: "varchar", nullable: false})
  body: string;

  @Column({type: "varchar", nullable: true})
  image: string;

  @Column({type: "boolean", default: false})
  visit: boolean;

  @Column({type: "varchar", nullable: false})
  category_id: string;

  @Column({type: "int", nullable: false})
  price: number;

  @Column({type: "bigint", nullable: false})
  created_at: number;

  @Column({type: "boolean", default: false})
  complete: boolean;

  @Column({ type: "varchar", nullable: true})
  location_x : string;

  @Column({ type: "varchar", nullable: true})
  location_y : string;

  @ManyToOne(() => Category, category => category.post, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE"
  })
  @JoinColumn([
    {name: "category_id", referencedColumnName: "category_id"}
  ])
  category: Category;

  @ManyToOne(() => User, user => user.posts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn([
    {name: "user_id", referencedColumnName: "user_id"}
  ])
  user: User;

  @OneToMany(() => ChatRoom, chatRoom => chatRoom.post)
  chatRooms: ChatRoom[];

  @OneToMany(() => Resolver, resolver => resolver.posts)
  resolver: Resolver[];



}
