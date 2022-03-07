import { DynamicModule, flatten, Module } from '@nestjs/common';
import { AsyncModelFactory, ModelDefinition } from './interfaces';
import {
  MongooseModuleAsyncOptions,
  MongooseModuleOptions,
} from './interfaces/mongoose-options.interface';


@Module({})
export class NestjsConsumesProducesModule {
  static forRoot(
    uri: string,
    options: MongooseModuleOptions = {},
  ): DynamicModule {
    return {
      module: NestjsConsumesProducesModule,
  
    };
  }

  static forRootAsync(options: MongooseModuleAsyncOptions): DynamicModule {
    return {
      module: NestjsConsumesProducesModule,

    };
  }

  
}