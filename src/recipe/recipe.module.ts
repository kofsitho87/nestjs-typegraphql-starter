import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import Recipe from 'src/ entities/Recipe';
import RecipeResolver from './resolver';
import RecipeService from './service';

@Module({
  imports: [TypegooseModule.forFeature([Recipe])],
  providers: [RecipeResolver, RecipeService],
})
export class RecipeModule {}
