import { Controller,Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiQuery } from '@nestjs/swagger';
import { LoginQuery } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('signin')
  async login(@Query() query: LoginQuery): Promise<any>{
    return await this.authService.signIn(query);
}

}
