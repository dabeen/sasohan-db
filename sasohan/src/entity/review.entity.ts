import { Resolver } from "./resolver.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Review {
  @PrimaryColumn()
  review_id: string;

  @Column()
  user_id: string;

  @Column()
  post_id: string;

  @Column({nullable: true})
  body: string;

  @Column({ nullable: true })
  created_at: number;

  @Column()
  point: number;



} 