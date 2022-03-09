import {Global, DynamicModule, Module } from '@nestjs/common';
import {NestjsConsumesProducesService} from './service'
import {NestjsConsumesProducesModuleAsyncOptions,INestjsConsumesProducesService} from './interfaces'



@Global()
@Module({})
export class NestjsConsumesProducesModule {
  static forRoot(): DynamicModule {
    return {
      module: NestjsConsumesProducesModule,
      providers: [{
        provide:INestjsConsumesProducesService,
        useClass:NestjsConsumesProducesService
      }],
      exports:[{
        provide:INestjsConsumesProducesService,
        useClass:NestjsConsumesProducesService
      }]
    
    };
  }

  static forRootAsync(options:NestjsConsumesProducesModuleAsyncOptions): DynamicModule {
    return {
      module: NestjsConsumesProducesModule,
      providers: [{
        provide:INestjsConsumesProducesService,
        useClass:options.useClass
      }],
      exports:[{
        provide:INestjsConsumesProducesService,
        useClass:options.useClass
      }]

    };
  }


}