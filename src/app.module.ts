import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TypeGraphQLModule } from 'typegraphql-nestjs';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/nest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    TypeGraphQLModule.forRootAsync({
      useFactory: async () => ({
        cors: true,
        debug: true,
        playground: true,
        validate: true,
      }),
    }),
    // TypeGraphQLModule.forRoot({
    //   debug: true,
    //   emitSchemaFile: true,
    //   validate: false,
    //   // authChecker,
    //   // dateScalarMode: 'timestamp',
    //   //context: ({ req }) => ({ currentUser: req.user }),
    // }),
    RecipeModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
