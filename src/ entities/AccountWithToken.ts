import { Field, ObjectType } from 'type-graphql';
import Account from './Account';

@ObjectType({ description: '사용자 계정' })
export default class AccountWithToken {
  @Field(() => String, {
    description: 'token',
    nullable: false,
  })
  token!: string;

  @Field(() => Account, {
    description: '계정정보',
    nullable: false,
  })
  account!: Account;
}
