import { Injectable } from '@nestjs/common';
import Recipe from 'src/ entities/Recipe';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import RecipeService from './service';

@Injectable()
@Resolver()
export default class RecipeResolver {
  constructor(private readonly recipeService: RecipeService) {}

  @Query(() => [Recipe])
  recipes() {
    return this.recipeService.getRecipes();
  }

  @Mutation(() => Recipe)
  addRecipe(@Arg('input') recipe: Recipe) {
    return this.recipeService.addRecipe(recipe);
  }
}
