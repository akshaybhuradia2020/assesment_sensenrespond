import {ApiProperty} from '@nestjs/swagger';
import {IsDate, IsString, MaxLength} from 'class-validator';

export class CreateCommentDto {
    @ApiProperty()
    @IsString()
    content: string;

    @ApiProperty()
    @IsString()
    author: string;

    @ApiProperty()
    @IsDate()
    timestamp: string;

    @ApiProperty()
    @IsString()
    postid: string;
}
