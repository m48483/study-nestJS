import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from './comment.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  board_id: number;

  @Column()
  board_title: string;

  @Column()
  board_content: string;

  @Column()
  board_author: string;

  @Column()
  board_created_at: Date;

  @Column()
  board_updated_at: Date;

  @OneToMany(() => Comment, (comment) => comment.board)
  comments: Comment[];
}
