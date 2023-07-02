import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrivateConversation } from '../entity/private-conversation.entity';
import { PrivateConversationController } from '../controller/private-conversation.controller';
import { PrivateConversationService } from '../service/private-conversation.service';
import { Message } from '../entity/message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrivateConversation, Message])],
  controllers: [PrivateConversationController],
  providers: [PrivateConversationService],
})
export class PrivateConversationModule {}
