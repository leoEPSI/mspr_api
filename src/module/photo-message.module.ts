import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoMessageEntity } from './entity/photo-message.entity';
import { PhotoMessageController } from './controller/photo-message.controller';
import { PhotoMessageService } from './service/photo-message.service';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoMessageEntity])],
  controllers: [PhotoMessageController],
  providers: [PhotoMessageService],
})
export class PhotoMessageModule {}
