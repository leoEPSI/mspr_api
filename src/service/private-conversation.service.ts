import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrivateConversation } from '../entity/private-conversation.entity';

@Injectable()
export class PrivateConversationService {
  constructor(
    @InjectRepository(PrivateConversation)
    private readonly privateConversationRepository: Repository<PrivateConversation>,
  ) {}

  async getAllPrivateConversations(): Promise<PrivateConversation[]> {
    return this.privateConversationRepository.find();
  }

  async getPrivateConversationById(id: number): Promise<PrivateConversation> {
    return this.privateConversationRepository.findOne(id);
  }

  async createPrivateConversation(privateConversation: PrivateConversation): Promise<PrivateConversation> {
    return this.privateConversationRepository.save(privateConversation);
  }

  async updatePrivateConversation(id: number, privateConversation: PrivateConversation): Promise<PrivateConversation> {
    await this.privateConversationRepository.update(id, privateConversation);
    return this.privateConversationRepository.findOne(id);
  }

  async deletePrivateConversation(id: number): Promise<void> {
    await this.privateConversationRepository.delete(id);
  }
}
