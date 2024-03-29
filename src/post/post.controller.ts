import { Controller, Get, Post, Body, Param, Delete, UseGuards, Query } from '@nestjs/common';
import {AuthGuard} from '../auth/auth.guard';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { PostQuery } from './dto/query-param-post.dto';

@ApiBearerAuth()
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @UseGuards(AuthGuard)
  @Post('add-post')
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get('get-all-post')
  async findAll(@Query() query: PostQuery) {
    return await this.postService.findAll(query);
  }

  @Get('get-one-post/:id')
  async findOne(@Param('id') id: string) {
    return await this.postService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Post('update-post/:id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return await this.postService.update(id, updatePostDto);
  }

  @UseGuards(AuthGuard)
  @Delete('delete-post/:id')
  async remove(@Param('id') id: string) {
    return await this.postService.remove(id);
  }
}
