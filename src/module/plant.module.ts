import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from '../entity/plant.entity';
import { PlantController } from '../controller/plant.controller';
import { PlantService } from '../service/plant.service';

@Module({
  imports: [TypeOrmModule.forFeature([Plant])],
  controllers: [PlantController],
  providers: [PlantService],
})
export class PlantModule {}
