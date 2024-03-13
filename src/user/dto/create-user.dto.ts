import {ApiProperty} from '@nestjs/swagger';
import {IsString, MaxLength} from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsString()
    email: string;
}
