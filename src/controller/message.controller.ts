import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { MessageService } from '../service/message.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  getAllMessages() {
    return this.messageService.getAllMessages();
  }

  @Get(':id')
  getMessageById(@Param('id') id: number) {
    return this.messageService.getMessageById(id);
  }

  @Post()
  createMessage(@Body() messageData: any) {
    return this.messageService.createMessage(messageData);
  }

  @Patch(':id')
  updateMessage(@Param('id') id: number, @Body() messageData: any) {
    return this.messageService.updateMessage(id, messageData);
  }

  @Delete(':id')
  deleteMessage(@Param('id') id: number) {
    return this.messageService.deleteMessage(id);
  }
}
