

import { Resolver } from "./resolver.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Message } from "./message.entity";
import { Posts } from "./posts.entity";



@Entity()
export class User {
  @PrimaryColumn()
  user_id: string;

  @Column({ unique: true, nullable: false })
  nickname: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  birthday: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  age_arange: string;

  @Column({ default: 0 })
  point: number;

  @Column({nullable: false})
  account_type: string;

  @OneToMany(() => Posts, post => post.user)
  post: Posts[];

  @OneToMany(() => Resolver, resolver => resolver.user )
  resolver: Resolver[];

  @OneToMany(() => Message, message => message.user)
  message: Message[];
}

