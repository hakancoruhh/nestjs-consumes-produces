import { DynamicModule, Module } from '@nestjs/common';
import {NestjsConsumesProducesService} from './service'
import {NestjsConsumesProducesModuleAsyncOptions} from './interfaces'




@Module({})
export class NestjsConsumesProducesModule {
  static forRoot(): DynamicModule {
    return {
      module: NestjsConsumesProducesModule,
      providers: [NestjsConsumesProducesService],
      exports: [NestjsConsumesProducesService],
    };
  }

  static forRootAsync(options:NestjsConsumesProducesModuleAsyncOptions): DynamicModule {
    return {
      module: NestjsConsumesProducesModule,

    };
  }


}