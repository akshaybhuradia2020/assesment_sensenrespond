import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schemas/post.schemas';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostQuery } from './dto/query-param-post.dto';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>){}
  
  async create(createPostDto: CreatePostDto) {
    try{
      const createdpost = new this.postModel(createPostDto);
      return await createdpost.save();
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'ops something went wrong',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(query: PostQuery) {
    try{
      return await this.postModel.find().limit(query.limit).skip(query.skip);
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'ops something went wrong',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: string) {
    try{
      return await this.postModel.findById(id);
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'ops something went wrong',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: string, updatePostDto: UpdatePostDto) {

    try{
      return await this.postModel.findByIdAndUpdate(id, updatePostDto);
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'ops something went wrong',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(postid: string) {
    try{
      return await this.postModel.findByIdAndDelete(postid);
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'ops something went wrong',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
