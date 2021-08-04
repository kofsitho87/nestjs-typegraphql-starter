import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import Account from 'src/ entities/Account';
import AccountWithToken from 'src/ entities/AccountWithToken';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { AuthService } from './auth.service';
import LoginInput from './input/login.input';
import RegisterInput from './input/register.input';

@Injectable()
@Resolver()
export default class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Query(() => AccountWithToken)
  async login(@Arg('input') loginInput: LoginInput) {
    const account = await this.authService.login(loginInput);
    const token = this.jwtService.sign(account);
    return {
      account,
      token,
    };
  }

  @Mutation(() => Account)
  async register(@Arg('input') registerInput: RegisterInput) {
    return await this.authService.createAccount(registerInput);
  }
}
