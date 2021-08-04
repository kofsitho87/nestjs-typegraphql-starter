import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import Account from 'src/ entities/Account';
import RegisterInput from './input/register.input';
import * as bcrypt from 'bcrypt';
import LoginInput from './input/login.input';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Account)
    private readonly accountModel: ReturnModelType<typeof Account>,
  ) {}
  async validateUser(payload) {
    console.log(payload);
    return null;
  }

  async createAccount({
    email,
    password,
    username,
  }: RegisterInput): Promise<Account> {
    const existsAccount = await this.accountModel.exists({ email });
    if (existsAccount) {
      throw new HttpException('Account already exists', HttpStatus.BAD_REQUEST);
    }

    const newPw = bcrypt.hashSync(password, 10);
    return new this.accountModel({ email, username, password: newPw }).save();
  }

  async login({ email, password }: LoginInput): Promise<Account> {
    const account = await this.findOneWithFilter({ email });
    if (!account) {
      throw new HttpException('Account no exists', HttpStatus.BAD_REQUEST);
    }
    const isMatch = bcrypt.compareSync(password, account.password);
    if (!isMatch) {
      throw new HttpException('Wrong password', HttpStatus.BAD_REQUEST);
    }
    return account;
  }

  async findOneWithFilter(filter: any): Promise<Account> {
    return this.accountModel.findOne(filter).lean();
  }
}
