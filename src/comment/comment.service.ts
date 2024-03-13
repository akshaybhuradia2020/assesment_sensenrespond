import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Comment} from './schemas/comment.schemas';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentQuery } from './dto/query-param-comment.dto';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>){}

  create(createCommentDto: CreateCommentDto) {
    try{
      const createdpost = new this.commentModel(createCommentDto);
      return createdpost.save();
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'ops something went wrong',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  findAll(query:CommentQuery) {
    try{
      return this.commentModel.find({}).limit(query.limit).skip(query.skip);
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'ops something went wrong',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findOne(id: string) {
    
    try{
      return this.commentModel.findById(id);
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'ops something went wrong',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    try{
      return this.commentModel.findByIdAndUpdate(id, updateCommentDto)
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'ops something went wrong',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  remove(commentid: string) {
    try{
      return this.commentModel.findByIdAndDelete(commentid);
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'ops something went wrong',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
