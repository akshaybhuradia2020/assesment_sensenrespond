import { Controller,Get, Query, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiQuery } from '@nestjs/swagger';
import { LoginQuery } from './dto/login.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('signin')
  async login(@Query() query: LoginQuery): Promise<any>{
    return await this.authService.signIn(query);
}

@UseGuards(AuthGuard)
@Get('logout')
async logout(): Promise<any>{
  return await this.authService.logout();
}





}
