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

  async getMessageById(id_message: number) {
    return this.messageRepository.findOneBy({id_message});
  }

  async createMessage(messageData: any) {
    const newMessage = this.messageRepository.create(messageData);
    return this.messageRepository.save(newMessage);
  }

  async updateMessage(id_message: number, messageData: any) {
    await this.messageRepository.update(id_message, messageData);
    return this.messageRepository.findOneBy({id_message});
  }

  async deleteMessage(id_message: number) {
    const deletedMessage = await this.messageRepository.findOneBy({id_message});
    await this.messageRepository.delete(id_message);
    return deletedMessage;
  }

  async getMessageByIdPrivateConversation(id_message: number) {
    return this.messageRepository.findOneBy({id_message});
  }

}
