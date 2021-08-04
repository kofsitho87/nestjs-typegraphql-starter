import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypegooseModule } from 'nestjs-typegoose';
import Account from 'src/ entities/Account';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import AuthResolver from './resolver';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: 'process.env.SECRETKEY',
      // signOptions: {
      //   expiresIn: process.env.EXPIRESIN,
      // },
    }),
    TypegooseModule.forFeature([Account]),
  ],
  providers: [AuthResolver, AuthService, JwtStrategy],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
