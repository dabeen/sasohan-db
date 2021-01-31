
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Message } from "./message.entity";
import { Post } from "./post.entity";
import { UserConnection } from "./user-connection.entity";

@Entity()
export class User {
  @PrimaryColumn()
  user_id: string;

  @Column()
  nickname: string;

  @Column()
  gender: string;

  @Column()
  birthday: string;

  @Column()
  email: string;

  @Column()
  age_arange: string;

  @Column()
  point: number;

  @OneToMany(() => Post, post => post.category)
  posts: Post[];

  @OneToMany(() => Message, message => message.user)
  message: Message[];
}

