import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrivateConversation } from '../entity/private-conversation.entity';
import { Message } from '../entity/message.entity';

@Injectable()
export class PrivateConversationService {
  constructor(
    @InjectRepository(PrivateConversation)
    private readonly privateConversationRepository: Repository<PrivateConversation>,
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async getAllPrivateConversations(): Promise<PrivateConversation[]> {
    return this.privateConversationRepository.find();
  }

  async getPrivateConversationById(id_private_conversation: number): Promise<PrivateConversation> {
    return this.privateConversationRepository.findOneBy({id_private_conversation});
  }

  async createPrivateConversation(privateConversation: PrivateConversation): Promise<PrivateConversation> {
    return this.privateConversationRepository.save(privateConversation);
  }

  async updatePrivateConversation(id_private_conversation: number, privateConversation: PrivateConversation): Promise<PrivateConversation> {
    await this.privateConversationRepository.update(id_private_conversation, privateConversation);
    return this.privateConversationRepository.findOneBy({id_private_conversation});
  }

  async deletePrivateConversation(id: number): Promise<void> {
    await this.privateConversationRepository.delete(id);
  }

  async getMessagesByConversationId(conversationId: number): Promise<Message[]> {
    return this.messageRepository
      .createQueryBuilder('message')
      .leftJoinAndSelect('message.id_photo_m', 'photo_message')
      .leftJoinAndSelect('message.id_users', 'user')
      .select(['message', 'user.id'])
      .where('message.id_private_conversation = :conversationId', { conversationId })
      .getMany();
  }
}
