import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import Recipe from 'src/ entities/Recipe';

@Injectable()
export default class RecipeService {
  constructor(
    @InjectModel(Recipe)
    private readonly model: ReturnModelType<typeof Recipe>,
  ) {}
  // private readonly recipes: Recipe[] = [];

  getRecipes() {
    // return this.recipes;
    return [];
  }

  addRecipe(recipe: Recipe) {
    // this.recipes.push(recipe);
    return new this.model(recipe).save();
  }
}
