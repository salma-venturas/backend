import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HomeDetailService } from './home-detail.service';
import { CreateHomeDetailDto } from './dto/create-home-detail.dto';

@Controller('/api/me/detail')
export class HomeDetailController {
  constructor(private readonly homeDetailService: HomeDetailService) {}

  @Post()
  create(@Body() createHomeDetailDto: CreateHomeDetailDto) {
    return this.homeDetailService.create(createHomeDetailDto);
  }

  @Get()
  findAll() {
    return this.homeDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homeDetailService.findOne(+id);
  }
}
