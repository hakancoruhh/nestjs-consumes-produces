import {Global, DynamicModule, Module } from '@nestjs/common';
import {NestjsConsumesProducesService} from './service'
import {NestjsConsumesProducesModuleAsyncOptions,INestjsConsumesProducesServiceSymbol} from './interfaces'



@Global()
@Module({})
export class NestjsConsumesProducesModule {
  static forRoot(): DynamicModule {
    return {
      module: NestjsConsumesProducesModule,
      providers: [{
        provide:INestjsConsumesProducesServiceSymbol,
        useClass:NestjsConsumesProducesService
      }],
      exports:[{
        provide:INestjsConsumesProducesServiceSymbol,
        useClass:NestjsConsumesProducesService
      }]
    
    };
  }

  static forRootAsync(options:NestjsConsumesProducesModuleAsyncOptions): DynamicModule {
    return {
      module: NestjsConsumesProducesModule,
      providers: [{
        provide:INestjsConsumesProducesServiceSymbol,
        useClass:options.useClass
      }],
      exports:[{
        provide:INestjsConsumesProducesServiceSymbol,
        useClass:options.useClass
      }]

    };
  }


}