import { mongoose, Prop } from '@typegoose/typegoose';
import { ObjectType, Field, InputType, ID } from 'type-graphql';

@ObjectType()
@InputType('RecipeInput')
export default class Recipe {
  // @Field(() => ID, { nullable: false })
  // _id!: mongoose.Types.ObjectId;

  @Field()
  @Prop({
    type: String,
    required: true,
  })
  title!: string;

  @Field({ nullable: true })
  @Prop({
    type: String,
    default: null,
  })
  description?: string;
}
