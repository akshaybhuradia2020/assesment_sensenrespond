import {ApiProperty} from '@nestjs/swagger';
import {IsString } from 'class-validator';

export class LoginQuery {
    @ApiProperty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsString()
    password: string;
}
