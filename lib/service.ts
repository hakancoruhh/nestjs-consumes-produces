import { Injectable,HttpStatus } from "@nestjs/common";
import {ContentTypes,consumesApidefaultMessage,producesApidefaultMessage,defaultTitle} from './constants'
import {INestjsConsumesProducesService} from './interfaces'


@Injectable()
export class NestjsConsumesProducesService implements INestjsConsumesProducesService {
  getTitle():string{
      return defaultTitle
  }
  getConsumesErrorText(expected:ContentTypes[],received:ContentTypes):string{
    return consumesApidefaultMessage
  }

  getProducesErrorText(expected:ContentTypes[],received:ContentTypes[]):string{
    return producesApidefaultMessage
  }

  getHttpCode():HttpStatus{
    return  HttpStatus.NOT_ACCEPTABLE
  }

  isConsumesExtraConditionOk(expected: ContentTypes[], received: ContentTypes, request: Request): boolean {
    return true
   }


  isProducesExtraConditionOk(expected:ContentTypes[],received:ContentTypes[]):boolean{
    return true
  }
}
