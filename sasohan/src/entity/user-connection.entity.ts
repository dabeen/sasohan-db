import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserConnection {
  @PrimaryColumn({type: "varchar",nullable: false})
  user_id: string;

  @Column({type: "bigint", nullable: false})
  connected_at: number;

  @Column({type: "boolean", nullable: false})
  connection_status: boolean;
  
}