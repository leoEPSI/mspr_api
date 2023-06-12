import { Module } from '@nestjs/common';
/*
import { AppController } from './app.controller';
import { CommentController } from './controller/comment.controller';
import { MessageController } from './controller/message.controller';
import { PlantController } from './controller/plant.controller';
import { UserController } from './controller/user.controller';

import { AppService } from './app.service';
import { CommentService } from './service/comment.service';
import { MessageService } from './service/message.service';
import { PlantService } from './service/plant.service';
import { UserService } from './service/users.service';
*/
import { UserModule } from './module/user.module';
import { PlantModule } from './module/plant.module';
import { MessageModule } from './module/message.module';
import { CommentModule } from './module/comment.module';

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
  ],
})
export class AppModule {}
