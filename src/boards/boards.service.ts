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

  getBoardById(id: number): Board {
    return this.boards.find((board) => board.id === id);
  }
  deleteAllBoards(): void {
    this.boards = [];
  }
  deleteBoardById(id: number): void {
    // id가 같을 때만 삭제
    this.boards = this.boards.filter((board) => board.id !== id);
  }
}
