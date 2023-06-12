import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoCommentEntity } from './entity/photo-comment.entity';
import { PhotoCommentController } from './controller/photo-comment.controller';
import { PhotoCommentService } from './service/photo-comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoCommentEntity])],
  controllers: [PhotoCommentController],
  providers: [PhotoCommentService],
})
export class PhotoCommentModule {}
