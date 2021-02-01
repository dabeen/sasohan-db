import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn} from "typeorm";
import { Message } from "./message.entity";
import { Posts } from "./posts.entity";

@Entity()
export class ChatRoom {
  @PrimaryColumn()
  room_id: string;

  @Column()
  category_name: string;

  @ManyToOne(type => Posts, posts => posts.chatRooms, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION"
  })
  @JoinColumn([
    {name: "post_id", referencedColumnName: "post_id"}
  ])
  post: Posts;

  @OneToMany(() => Message, message => message.chatRooms)
  message: Message[];
}