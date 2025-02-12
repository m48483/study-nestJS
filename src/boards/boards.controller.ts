import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';
import { RequestBoardDto } from './dto/request-board.dto';

@Controller('api/boards')
export class BoardsController {
  boardsService: BoardsService;
  constructor(boardService: BoardsService) {
    this.boardsService = boardService;
  }
  //   constructor(private boardsService: BoardsService){}
  @Get()
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(
    //     @Body('name') name: string,
    //     @Body('content') content: string,
    //   ): Board {
    //     return this.boardsService.createBoard(name, content);
    //   }
    @Body() request: RequestBoardDto,
  ): Board {
    return this.boardsService.createBoard(request);
  }
}
