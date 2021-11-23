import { EntityRepository, IsNull, Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { HomeDetail } from './entities/home-detail.entity';
import { ResponseHomeDetailDto } from './dto/response-home-detail.dto';
@Injectable()
@EntityRepository(HomeDetail)
export class HomeDetailRepository extends Repository<HomeDetail> {
  async findAll() {
    try {
      return await this.findAndCount();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // async create_new(createHomeDetailDto) {
  //   try {
  //     return await this.save(createHomeDetailDto);
  //   } catch (error) {
  //     throw new BadRequestException(error.message);
  //   }
  // }

  async findOne(id) {
    try {
      return await this.findOneOrFail(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
