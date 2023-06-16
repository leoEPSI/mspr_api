import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { PhotoPlantService } from '../service/photo-plant.service';
import { PhotoPlant } from '../entity/photo-plant.entity';

@Controller('photo-plant')
export class PhotoPlantController {
  constructor(private readonly photoPlantService: PhotoPlantService) {}

  @Get()
  async getAllPhotoPlants(): Promise<PhotoPlant[]> {
    return this.photoPlantService.getAllPhotoPlants();
  }

  @Get(':id')
  async getPhotoPlantById(@Param('id') id: number): Promise<PhotoPlant> {
    return this.photoPlantService.getPhotoPlantById(id);
  }

  @Post()
  async createPhotoPlant(@Body() photoPlant: PhotoPlant): Promise<PhotoPlant> {
    return this.photoPlantService.createPhotoPlant(photoPlant);
  }

  @Patch(':id')
  async updatePhotoPlant(@Param('id') id: number, @Body() messageData: any): Promise<PhotoPlant> {
    return this.photoPlantService.updatePhotoPlant(id, messageData);
  }

  @Delete(':id')
  async deletePhotoPlant(@Param('id') id: number): Promise<void> {
    return this.photoPlantService.deletePhotoPlant(id);
  }
}
