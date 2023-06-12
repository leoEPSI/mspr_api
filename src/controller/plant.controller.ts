import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PlantService } from '../service/plant.service';

@Controller('plants')
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Get()
  getAllPlants() {
    return this.plantService.getAllPlants();
  }

  @Get(':id')
  getPlantById(@Param('id') id: number) {
    return this.plantService.getPlantById(id);
  }

  @Post()
  createPlant(@Body() plantData: any) {
    return this.plantService.createPlant(plantData);
  }

  @Patch(':id')
  updatePlant(@Param('id') id: number, @Body() plantData: any) {
    return this.plantService.updatePlant(id, plantData);
  }

  @Delete(':id')
  deletePlant(@Param('id') id: number) {
    return this.plantService.deletePlant(id);
  }
}
