import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsNumber} from 'class-validator';

export class PostQuery {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    limit: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    skip: number;
}
