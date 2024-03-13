import {ApiProperty} from '@nestjs/swagger';
import {IsDate, IsNotEmpty, IsString, MaxLength} from 'class-validator';
export class CreatePostDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    content: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    author: string;

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    timestamp: Date;   
}
