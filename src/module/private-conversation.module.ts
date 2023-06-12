import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrivateConversationEntity } from './entity/private-conversation.entity';
import { PrivateConversationController } from './controller/private-conversation.controller';
import { PrivateConversationService } from './service/private-conversation.service';

@Module({
  imports: [TypeOrmModule.forFeature([PrivateConversationEntity])],
  controllers: [PrivateConversationController],
  providers: [PrivateConversationService],
})
export class PrivateConversationModule {}
