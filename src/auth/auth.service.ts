import { Injectable, UnauthorizedException } from '@nestjs/common';
import {UserService} from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginQuery } from './dto/login.dto';

@Injectable()
export class AuthService {

  constructor(private userService: UserService, private jwtService: JwtService){}

  async signIn(_data:LoginQuery): Promise<any> {
    const _user = await this.userService.checkuserexist(_data);

    if (_user["user_id"] == null) {
      throw new UnauthorizedException();
    }
    const payload = {sub: _user["user_id"].toString()};

    return {
      access_token: await this.jwtService.signAsync(payload),
      user_id: _user["user_id"].toString()
    };

  }
}
