import { Injectable } from '@nestjs/common';
import { Board } from './boards.model';
import { RequestBoardDto } from './dto/request-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
  //   createBoard(name: string, content: string): Board {
  createBoard(request: RequestBoardDto): Board {
    const { name, content } = request;
    const board: Board = {
      id: Number(),
      name,
      content,
    };
    this.boards.push(board);
    return board;
  }
}
