

import { Resolver } from "./resolver.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Message } from "./message.entity";
import { Posts } from "./posts.entity";
import { UserConnection } from "./user-connection.entity";
import { UserLocation } from "./user-location.entity";

@Entity()
export class User {
  @PrimaryColumn({type: "varchar", nullable: false})
  user_id: string;

  @Column({ unique: true, nullable: false })
  nickname: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  birthday: string;

  @Column({ nullable: true })
  age: number;

  @Column({ default: 0 })
  point: number;

  @Column({nullable: false})
  account_type: string;

  @OneToMany(() => Posts, posts => posts.user)
  posts: Posts[];

  @OneToMany(() => Resolver, resolver => resolver.user )
  resolver: Resolver[];

  @OneToMany(() => Message, message => message.user)
  message: Message[];

  @OneToOne(() => UserConnection,{
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn()
  userConnection: UserConnection;

  @OneToOne(() => UserLocation, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn()
  userLocation: UserLocation;
}

