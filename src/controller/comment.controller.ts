import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CommentService } from '../service/comment.service';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  getAllComments() {
    return this.commentService.getAllComments();
  }

  @Get(':id')
  getCommentById(@Param('id') id: number) {
    return this.commentService.getCommentById(id);
  }

  @Post()
  createComment(@Body() commentData: any) {
    return this.commentService.createComment(commentData);
  }

  
  @Patch(':id')
  updateComment(@Param('id') id: number, @Body() commentData: any) {
    return this.commentService.updateComment(id, commentData);
  }

  @Delete(':id')
  deleteComment(@Param('id') id: number) {
    return this.commentService.deleteComment(id);
  }
}
