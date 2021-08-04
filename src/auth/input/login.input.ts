import { IsEmail, IsString } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export default class LoginInput {
  @IsEmail()
  @Field(() => String, {
    description: '로그인 아이디 및 이메일',
    nullable: false,
  })
  email!: string;

  @IsString()
  @Field(() => String, {
    description: '비번',
    nullable: false,
  })
  password!: string;
}
