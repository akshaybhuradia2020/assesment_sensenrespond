import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import {UserModule} from '../user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';


@Module({
  imports: [UserModule, 
    JwtModule.register({
      global: true,
      secret: "wsdf",
      signOptions: { expiresIn: '600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
