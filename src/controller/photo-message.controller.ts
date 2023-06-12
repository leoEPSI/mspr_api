import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PhotoMessageService } from '../service/photo-message.service';
import { PhotoMessage } from '../entity/photo-message.entity';

@Controller('photo-message')
export class PhotoMessageController {
  constructor(private readonly photoMessageService: PhotoMessageService) {}

  @Get()
  async getAllPhotoMessages(): Promise<PhotoMessage[]> {
    return this.photoMessageService.getAllPhotoMessages();
  }

  @Get(':id')
  async getPhotoMessageById(@Param('id') id: number): Promise<PhotoMessage> {
    return this.photoMessageService.getPhotoMessageById(id);
  }

  @Post()
  async createPhotoMessage(@Body() photoMessage: PhotoMessage): Promise<PhotoMessage> {
    return this.photoMessageService.createPhotoMessage(photoMessage);
  }

  @Put(':id')
  async updatePhotoMessage(@Param('id') id: number, @Body() photoMessage: PhotoMessage): Promise<PhotoMessage> {
    return this.photoMessageService.updatePhotoMessage(id, photoMessage);
  }

  @Delete(':id')
  async deletePhotoMessage(@Param('id') id: number): Promise<void> {
    return this.photoMessageService.deletePhotoMessage(id);
  }
}
