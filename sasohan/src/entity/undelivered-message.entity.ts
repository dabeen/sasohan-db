import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ChatRoom } from "./chat-room.entity";
import { User } from "./user.entity";

@Entity()
export class UndeliveredMessage {

  @PrimaryGeneratedColumn("uuid")
  undelivered_message_id: string;

  @Column({type: "varchar", nullable: false})
  chat_room_id: string;

  @Column({type: "varchar", nullable: false})
  user_id: string;

  @Column({type: "varchar", nullable: false})
  text: string;

  @Column({type: "bigint", nullable: false})
  time: number;

  @ManyToOne(() => ChatRoom, chatRoom => chatRoom.message, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn([
    {name: "chat_room_id", referencedColumnName: "chat_room_id"}
  ])
  chatRooms: ChatRoom;

  @ManyToOne(() => User, user => user.user_id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn([
    {name: "user_id", referencedColumnName: "user_id"}
  ])
  user: User;
}