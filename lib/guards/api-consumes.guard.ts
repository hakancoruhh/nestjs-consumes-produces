import { DECORATORS, ContentTypes } from "../constants";
import { CanActivate, ExecutionContext, Inject, Injectable, } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import {INestjsConsumesProducesService,INestjsConsumesProducesServiceSymbol} from '../interfaces'
import {HttpNestjsConsumeProduceException} from '../errors'




@Injectable()
export class ConsumesContentTypeGuard implements CanActivate {
  constructor(private reflector: Reflector, @Inject(INestjsConsumesProducesServiceSymbol) private readonly consumesProducesService: INestjsConsumesProducesService) { }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const expectedContentTypes = this.reflector.get<ContentTypes[]>(
      DECORATORS.API_CONSUMES,
      context.getHandler()
    ) as ContentTypes[];

    const isEndPointExistContentType = expectedContentTypes && expectedContentTypes.length>0 
    if (!isEndPointExistContentType) return true
    const receivedContentType =  request.headers?.["content-type"] as ContentTypes
    const extraCondition = this.consumesProducesService.checkConsumesExtraCondition(expectedContentTypes,receivedContentType)
    const isNotInclude = expectedContentTypes.findIndex(x=>x==receivedContentType)==-1
    if (isNotInclude && extraCondition) {
     const message=  this.consumesProducesService.getConsumesErrorText(expectedContentTypes,receivedContentType)
     const title=  this.consumesProducesService.getTitle()
     const httpCode = this.consumesProducesService.getHttpCode()
      throw new HttpNestjsConsumeProduceException(
        {
          message:message,
          name: title,
        },
        httpCode
      );
    }

  }
}