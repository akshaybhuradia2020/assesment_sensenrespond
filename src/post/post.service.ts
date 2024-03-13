import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Post} from './schemas/post.schemas';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CommentQuery } from 'src/comment/dto/query-param-comment.dto';
import { PostQuery } from './dto/query-param-post.dto';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>){}
  
  async create(createPostDto: CreatePostDto) {
    const createdpost = new this.postModel(createPostDto);
    return await createdpost.save();
  }

  async findAll(query: PostQuery) {
    return await this.postModel.find().limit(query.limit).skip(query.skip);
  }

  async findOne(id: string) {
    return await this.postModel.findById(id);
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    return await this.postModel.findByIdAndUpdate(id, updatePostDto);
  }

  async remove(postid: string) {
    return await this.postModel.findByIdAndDelete(postid);
  }
}
