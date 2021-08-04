import { Index, Prop } from '@typegoose/typegoose';
import { ObjectId } from 'src/common/types';
import { Field, ID, ObjectType } from 'type-graphql';

@Index({ email: 1 }, { unique: true })
@ObjectType({ description: '사용자 계정' })
export default class Account {
  @Field(() => ID, { nullable: false })
  _id!: ObjectId;

  @Field(() => String, {
    description: '로그인 아이디 및 이메일',
    nullable: false,
  })
  @Prop({
    type: String,
    required: true,
  })
  email!: string;

  // @Field(() => String, {
  //   description: '모바일 폰 번호',
  //   nullable: false,
  // })
  // @Prop({
  //   type: String,
  //   required: true,
  // })
  // phone!: string;

  @Prop({
    type: String,
    required: true,
  })
  password!: string;

  @Field(() => String, {
    description: '사용자 이름',
    nullable: false,
  })
  @Prop({
    type: String,
    required: true,
  })
  username!: string;

  @Field(() => Date, {
    description: '탈퇴한 날짜 시간',
    nullable: true,
  })
  @Prop({ required: false })
  droppedAt?: Date;

  @Field(() => Date, {
    description: '수정한 날짜 시간',
    nullable: false,
  })
  @Prop({ default: Date.now })
  updatedAt!: Date;

  @Field(() => Date, {
    description: '등록한 날짜 시간',
    nullable: false,
  })
  @Prop({ default: Date.now })
  createdAt!: Date;
}
