import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PrivateConversationService } from '../service/private-conversation.service';
import { PrivateConversation } from '../entity/private-conversation.entity';
import { Message } from '../entity/message.entity';

@Controller('private-conversation')
export class PrivateConversationController {
  constructor(private readonly privateConversationService: PrivateConversationService) {}

  @Get()
  async getAllPrivateConversations(): Promise<PrivateConversation[]> {
    return this.privateConversationService.getAllPrivateConversations();
  }

  @Get(':id')
  async getPrivateConversationById(@Param('id') id: number): Promise<PrivateConversation> {
    return this.privateConversationService.getPrivateConversationById(id);
  }

  @Post()
  async createPrivateConversation(@Body() privateConversation: PrivateConversation): Promise<PrivateConversation> {
    return this.privateConversationService.createPrivateConversation(privateConversation);
  }

  @Put(':id')
  async updatePrivateConversation(
    @Param('id') id: number,
    @Body() privateConversation: PrivateConversation,
  ): Promise<PrivateConversation> {
    return this.privateConversationService.updatePrivateConversation(id, privateConversation);
  }

  @Delete(':id')
  async deletePrivateConversation(@Param('id') id: number): Promise<void> {
    return this.privateConversationService.deletePrivateConversation(id);
  }

  @Get(':id/messages')
  async getMessagesByConversationId(@Param('id') id: number): Promise<Message[]> {
    return this.privateConversationService.getMessagesByConversationId(id);
  }

}
