import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhotoPlant } from '../entity/photo-plant.entity';

@Injectable()
export class PhotoPlantService {
  constructor(
    @InjectRepository(PhotoPlant)
    private readonly photoPlantRepository: Repository<PhotoPlant>,
  ) {}

  async getAllPhotoPlants(): Promise<PhotoPlant[]> {
    return this.photoPlantRepository.find();
  }

  async getPhotoPlantById(id_photo_p: number): Promise<PhotoPlant> {
    return this.photoPlantRepository.findOneBy({id_photo_p});
  }

  async createPhotoPlant(photoPlant: PhotoPlant): Promise<PhotoPlant> {
    return this.photoPlantRepository.save(photoPlant);
  }

  async updatePhotoPlant(id_photo_p: number, photoPlant: PhotoPlant): Promise<PhotoPlant> {
    await this.photoPlantRepository.update(id_photo_p, photoPlant);
    return this.photoPlantRepository.findOneBy({id_photo_p});
  }

  async deletePhotoPlant(id_photo_p: number): Promise<void> {
    await this.photoPlantRepository.delete(id_photo_p);
  }
}
