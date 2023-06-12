import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plant } from '../entity/plant.entity';

@Injectable()
export class PlantService {
  constructor(
    @InjectRepository(Plant)
    private readonly plantRepository: Repository<Plant>,
  ) {}

  async getAllPlants() {
    return this.plantRepository.find();
  }

  async getPlantById(id: number) {
    return this.plantRepository.findOneBy({id});
  }

  async createPlant(plantData: any) {
    const newPlant = this.plantRepository.create(plantData);
    return this.plantRepository.save(newPlant);
  }

  async updatePlant(id: number, plantData: any) {
    await this.plantRepository.update(id, plantData);
    return this.plantRepository.findOneBy({id});
  }

  async deletePlant(id: number) {
    const deletedPlant = await this.plantRepository.findOneBy({id});
    await this.plantRepository.delete(id);
    return deletedPlant;
  }
}
