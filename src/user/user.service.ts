import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schemas';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>){}
  
  async create(createUserDto: CreateUserDto) {
    try{
      const createdUser = new this.userModel(createUserDto);
      return await createdUser.save();
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'ops something went wrong',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  async findAll() {
    try{
      return await this.userModel.find({});
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
      return this.userModel.findById(id);
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'ops something went wrong',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try{
      return await this.userModel.findByIdAndUpdate(id, updateUserDto)
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'ops something went wrong',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }

  async remove(id: string) {
    try{
      return await this.userModel.findByIdAndDelete(id)
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'ops something went wrong',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }

  async checkuserexist(_data:Object): Promise<Object>{
    try{
      const _check = await this.userModel.findOne(_data);
      if(_check) return {"user_id": _check._id};
      return {"user_id": null};
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'ops something went wrong',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  };

}
