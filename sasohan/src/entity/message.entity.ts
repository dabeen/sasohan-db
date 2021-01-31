import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import { ChatRoom } from "./chat-room.entity";
import { User } from "./user.entity";

@Entity()
export class Message {
  @PrimaryColumn({type: "varchar"})
  message_id: string;

  @Column({type: "varchar"})
  room_id: string;

  @Column({type: "varchar"})
  user_id: string;

  @Column({type: "varchar"})
  message: string;

  @Column({type: "varchar"})
  created_at: string;
  
  @ManyToOne(type => ChatRoom, chatRoom => chatRoom.message, {
    onDelete: "CASCADE",
    onUpdate: "NO ACTION"
  })
  @JoinColumn([
    {name: "room_id", referencedColumnName: "room_id"}
  ])
  chatRooms: ChatRoom;

  @ManyToOne(type => User, user => user.message, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn([
    {name: "user_id", referencedColumnName: "user_id"}
  ])
  user: User;

}