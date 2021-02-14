import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserLocation {
  @PrimaryColumn()
  user_id: string;

  @Column()
  location_x: string;

  @Column()
  location_y: string;

  
  
}