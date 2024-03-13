import { Controller, Get, Post, Body, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CommentQuery } from './dto/query-param-comment.dto';

@ApiBearerAuth()
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(AuthGuard)
  @Post('add-comment')
  async create(@Body() createCommentDto: CreateCommentDto) {
    return await this.commentService.create(createCommentDto);
  }

  @Get('get-all-comment')
  async findAll(@Query() query: CommentQuery) {
    return await this.commentService.findAll(query);
  }

  @Get('get-one-comment/:id')
  async findOne(@Param('id') id: string) {
    return await this.commentService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Post('update-comment/:id')
  async update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return await this.commentService.update(id, updateCommentDto);
  }

  @UseGuards(AuthGuard)
  @Delete('delete-comment/:id')
  async remove(@Param('id') id: string) {
    return await this.commentService.remove(id);
  }
}
