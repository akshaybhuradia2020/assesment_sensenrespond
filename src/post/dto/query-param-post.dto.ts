import {ApiProperty} from '@nestjs/swagger';
import {IsNumber} from 'class-validator';

export class PostQuery {
    @ApiProperty()
    @IsNumber()
    limit: number;

    @ApiProperty()
    @IsNumber()
    skip: number;
}
