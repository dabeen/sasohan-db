import { Resolver } from "./resolver.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Posts } from "./posts.entity";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  review_id: string;

  // This is ID of the user who wrote the review
  @Column()
  user_id: string;

  // This is ID of the resolved post
  @Column()
  post_id: string;

  // This is the body of the review.
  @Column({nullable: true})
  body: string;

  // This is the time when the review was written. (UNIX TIME)
  @Column({ nullable: true })
  created_at: number;

  // This is the point given to the user who solved the problem.
  @Column()
  point: number;

  @ManyToOne(() => User, user => user.review, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn([
    {name: "user_id", referencedColumnName: "user_id"}
  ])
  user: User;

  @ManyToOne(() => Posts, posts => posts.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  posts: Posts;
}

