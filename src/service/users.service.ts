import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers() {
    return this.userRepository.find();
  }

  async getUserById(id: number) {
    return this.userRepository.findOne(id);
  }

  async createUser(userData: any) {
    const newUser = this.userRepository.create(userData);
    return this.userRepository.save(newUser);
  }

  async updateUser(id: number, userData: any) {
    await this.userRepository.update(id, userData);
    return this.userRepository.findOne(id);
  }

  async deleteUser(id: number) {
    const deletedUser = await this.userRepository.findOne(id);
    await this.userRepository.delete(id);
    return deletedUser;
  }
}
