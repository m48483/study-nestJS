import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Board } from './board.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  comment_id: number;

  @Column()
  comment_title: string;

  @Column()
  comment_content: string;

  @Column()
  comment_author: string;

  @Column()
  board_created_at: Date;

  @Column()
  board_updated_at: Date;

  @ManyToOne(() => Board, (board) => board.comments)
  board: Board;
}
