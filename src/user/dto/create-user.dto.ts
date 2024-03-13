import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsNotEmpty, IsString, MinLength} from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    username: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    password: string;

    @ApiProperty()
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;
}
