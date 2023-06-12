import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from '../entity/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async getAllComments() {
    return this.commentRepository.find();
  }

  async getCommentById(id: number) {
    return this.commentRepository.findOneBy({id});
  }

  async createComment(commentData: any) {
    const newComment = this.commentRepository.create(commentData);
    return this.commentRepository.save(newComment);
  }

  async updateComment(id: number, commentData: any) {
    await this.commentRepository.update(id, commentData);
    return this.commentRepository.findOneBy({id});
  }

  async deleteComment(id: number) {
    const deletedComment = await this.commentRepository.findOneBy({id});
    await this.commentRepository.delete(id);
    return deletedComment;
  }
}
