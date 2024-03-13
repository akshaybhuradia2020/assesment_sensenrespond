import {ApiProperty} from '@nestjs/swagger';
import {IsDate, IsEmpty, IsString} from 'class-validator';

export class CreateCommentDto {
    @ApiProperty()
    @IsString()
    @IsEmpty()
    content: string;

    @ApiProperty()
    @IsString()
    @IsEmpty()
    author: string;

    @ApiProperty()
    @IsDate()
    @IsEmpty()
    timestamp: string;

    @ApiProperty()
    @IsString()
    @IsEmpty()
    postid: string;
}
