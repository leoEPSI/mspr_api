import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../entity/message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async getAllMessages() {
    return this.messageRepository.find();
  }

  async getMessageById(id: number) {
    return this.messageRepository.findOneBy({id});
  }

  async createMessage(messageData: any) {
    const newMessage = this.messageRepository.create(messageData);
    return this.messageRepository.save(newMessage);
  }

  async updateMessage(id: number, messageData: any) {
    await this.messageRepository.update(id, messageData);
    return this.messageRepository.findOneBy({id});
  }

  async deleteMessage(id: number) {
    const deletedMessage = await this.messageRepository.findOneBy({id});
    await this.messageRepository.delete(id);
    return deletedMessage;
  }
}
