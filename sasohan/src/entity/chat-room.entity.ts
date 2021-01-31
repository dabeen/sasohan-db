import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn} from "typeorm";
import { Message } from "./message.entity";
import { Post } from "./post.entity";

@Entity()
export class ChatRoom {
  @PrimaryColumn()
  room_id: string;

  @Column()
  category_name: string;

  @ManyToOne(type => Post, post => post.chatRooms, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION"
  })
  @JoinColumn([
    {name: "post_id", referencedColumnName: "post_id"}
  ])
  post: Post;

  @OneToMany(() => Message, message => message.chatRooms)
  message: Message[];
}