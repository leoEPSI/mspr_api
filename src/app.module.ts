import { Module } from '@nestjs/common';

import { UserModule } from './module/user.module';
import { PlantModule } from './module/plant.module';
import { MessageModule } from './module/message.module';
import { CommentModule } from './module/comment.module';
import { PhotoCommentModule } from "./module/photo-comment.module";
import { PhotoMessageModule } from "./module/photo-message.module";
import { PhotoPlantModule } from "./module/photo-plant.module";
import { PrivateConversationModule } from "./module/private-conversation.module";

import { ConfigModule, ConfigService } from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import entities from './index';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    PlantModule,
    MessageModule,
    CommentModule,
    PhotoCommentModule,
    PhotoMessageModule,
    PhotoPlantModule,
    PrivateConversationModule,
  ],
})
export class AppModule {}
