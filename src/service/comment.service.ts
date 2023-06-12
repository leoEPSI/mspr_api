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

  async getCommentById(id_comment: number) {
    return this.commentRepository.findOneBy({id_comment});
  }

  async createComment(commentData: any) {
    const newComment = this.commentRepository.create(commentData);
    return this.commentRepository.save(newComment);
  }

  async updateComment(id_comment: number, commentData: any) {
    await this.commentRepository.update(id_comment, commentData);
    return this.commentRepository.findOneBy({id_comment});
  }

  async deleteComment(id_comment: number) {
    const deletedComment = await this.commentRepository.findOneBy({id_comment});
    await this.commentRepository.delete(id_comment);
    return deletedComment;
  }
}
