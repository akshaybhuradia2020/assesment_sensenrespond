import {ApiProperty} from '@nestjs/swagger';
import {IsDate, IsString, MaxLength} from 'class-validator';
export class CreatePostDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    content: string;

    @ApiProperty()
    @IsString()
    author: string;

    @ApiProperty()
    @IsDate()
    timestamp: Date;   
}
