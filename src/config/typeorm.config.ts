import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Board } from 'src/entity/board.entity';
import { Comment } from 'src/entity/comment.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'nestjs_study',
  entities: [Board, Comment],
};
