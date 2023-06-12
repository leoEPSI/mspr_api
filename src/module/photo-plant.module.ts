import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoPlant } from '../entity/photo-plant.entity';
import { PhotoPlantController } from '../controller/photo-plant.controller';
import { PhotoPlantService } from '../service/photo-plant.service';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoPlant])],
  controllers: [PhotoPlantController],
  providers: [PhotoPlantService],
})
export class PhotoPlantModule {}
