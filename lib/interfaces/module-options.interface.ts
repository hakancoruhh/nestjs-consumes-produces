import { Type } from '@nestjs/common';
import { INestjsConsumesProducesService } from "./service.inteface";

export interface NestjsConsumesProducesModuleAsyncOptions{
    useClass:Type<INestjsConsumesProducesService>
  }