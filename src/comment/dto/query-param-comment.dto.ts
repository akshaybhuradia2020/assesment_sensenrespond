import {ApiProperty} from '@nestjs/swagger';
import {IsNumber } from 'class-validator';

export class CommentQuery {
    @ApiProperty()
    @IsNumber()
    limit: number;

    @ApiProperty()
    @IsNumber()
    skip: number;
}
