import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Comment} from './schemas/comment.schemas';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentQuery } from './dto/query-param-comment.dto';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>){}

  create(createCommentDto: CreateCommentDto) {
    const createdpost = new this.commentModel(createCommentDto);
    return createdpost.save();
  }

  findAll(query:CommentQuery) {
    return this.commentModel.find({}).limit(query.limit).skip(query.skip);
  }

  findOne(id: string) {
    return this.commentModel.findById(id);
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    return this.commentModel.findByIdAndUpdate(id, updateCommentDto)
  }

  remove(commentid: string) {
    return this.commentModel.findByIdAndDelete(commentid);
  }
}
