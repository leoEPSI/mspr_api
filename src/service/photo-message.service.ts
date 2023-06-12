import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhotoMessage } from '../entity/photo-message.entity';

@Injectable()
export class PhotoMessageService {
  constructor(
    @InjectRepository(PhotoMessage)
    private readonly photoMessageRepository: Repository<PhotoMessage>,
  ) {}

  async getAllPhotoMessages(): Promise<PhotoMessage[]> {
    return this.photoMessageRepository.find();
  }

  async getPhotoMessageById(id_photo_m: number): Promise<PhotoMessage> {
    return this.photoMessageRepository.findOneBy({id_photo_m});
  }

  async createPhotoMessage(photoMessage: PhotoMessage): Promise<PhotoMessage> {
    return this.photoMessageRepository.save(photoMessage);
  }

  async updatePhotoMessage(id_photo_m: number, photoMessage: PhotoMessage): Promise<PhotoMessage> {
    await this.photoMessageRepository.update(id_photo_m, photoMessage);
    return this.photoMessageRepository.findOneBy({id_photo_m});
  }

  async deletePhotoMessage(id_photo_m: number): Promise<void> {
    await this.photoMessageRepository.delete(id_photo_m);
  }
}
