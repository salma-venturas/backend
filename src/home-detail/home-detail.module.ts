import { Module } from '@nestjs/common';
import { HomeDetailService } from './home-detail.service';
import { HomeDetailController } from './home-detail.controller';
import { HomeDetail } from './entities/home-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeDetailRepository } from './home-detail.repository';

@Module({
  imports: [TypeOrmModule.forFeature([HomeDetail])],
  controllers: [HomeDetailController],
  providers: [HomeDetailService]
})
export class HomeDetailModule {}