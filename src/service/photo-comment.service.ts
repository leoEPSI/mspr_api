import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhotoComment } from '../entity/photo-comment.entity';

@Injectable()
export class PhotoCommentService {
  constructor(
    @InjectRepository(PhotoComment)
    private readonly photoCommentRepository: Repository<PhotoComment>,
  ) {}

  async getAllPhotoComments(): Promise<PhotoComment[]> {
    return this.photoCommentRepository.find();
  }

  async getPhotoCommentById(id_photo_c: number): Promise<PhotoComment> {
    return this.photoCommentRepository.findOneBy({id_photo_c});
  }

  async createPhotoComment(photoComment: PhotoComment): Promise<PhotoComment> {
    return this.photoCommentRepository.save(photoComment);
  }

  async updatePhotoComment(id_photo_c: number, messageData: any): Promise<PhotoComment> {
    await this.photoCommentRepository.update(id_photo_c, messageData);
    return this.photoCommentRepository.findOneBy({id_photo_c});
  }

  async deletePhotoComment(id_photo_c: number): Promise<void> {
    await this.photoCommentRepository.delete(id_photo_c);
  }
}
