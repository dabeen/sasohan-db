import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserConnection {
  @PrimaryColumn()
  user_id: string;

  @Column()
  connected_at: string;

  @Column()
  connection_status: boolean;
  
  @OneToOne(() => User,{
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn()
  user: User;
}