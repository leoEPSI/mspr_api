import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { PhotoCommentService } from '../service/photo-comment.service';
import { PhotoComment } from '../entity/photo-comment.entity';

@Controller('photo-comment')
export class PhotoCommentController {
  constructor(private readonly photoCommentService: PhotoCommentService) {}

  @Get()
  async getAllPhotoComments(): Promise<PhotoComment[]> {
    return this.photoCommentService.getAllPhotoComments();
  }

  @Get(':id')
  async getPhotoCommentById(@Param('id') id: number): Promise<PhotoComment> {
    return this.photoCommentService.getPhotoCommentById(id);
  }

  @Post()
  async createPhotoComment(@Body() photoComment: PhotoComment): Promise<PhotoComment> {
    return this.photoCommentService.createPhotoComment(photoComment);
  }

  @Patch(':id')
  async updatePhotoComment(@Param('id') id: number, @Body() photoComment: PhotoComment): Promise<PhotoComment> {
    return this.photoCommentService.updatePhotoComment(id, photoComment);
  }

  @Delete(':id')
  async deletePhotoComment(@Param('id') id: number): Promise<void> {
    return this.photoCommentService.deletePhotoComment(id);
  }
}
