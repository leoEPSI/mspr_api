import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Private_Conversation } from '../entity/private-conversation.entity';

@Injectable()
export class PrivateConversationService {
  constructor(
    @InjectRepository(Private_Conversation)
    private readonly privateConversationRepository: Repository<Private_Conversation>,
  ) {}

  async getAllPrivateConversations(): Promise<Private_Conversation[]> {
    return this.privateConversationRepository.find();
  }

  async getPrivateConversationById(id_user: number): Promise<Private_Conversation> {
    return this.privateConversationRepository.findOneBy({id_user});
  }

  async createPrivateConversation(privateConversation: Private_Conversation): Promise<Private_Conversation> {
    return this.privateConversationRepository.save(privateConversation);
  }

  async updatePrivateConversation(id_user: number, privateConversation: Private_Conversation): Promise<Private_Conversation> {
    await this.privateConversationRepository.update(id_user, privateConversation);
    return this.privateConversationRepository.findOneBy({id_user});
  }

  async deletePrivateConversation(id: number): Promise<void> {
    await this.privateConversationRepository.delete(id);
  }
}
