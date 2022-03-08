import { DECORATORS, ContentTypes } from "../constants";
import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import {INestjsConsumesProducesService,INestjsConsumesProducesServiceSymbol} from '../interfaces'
import {HttpNestjsConsumeProduceException} from '../errors'



@Injectable()
export class ProducesContentTypeGuard implements CanActivate {
  constructor(private reflector: Reflector, @Inject(INestjsConsumesProducesServiceSymbol) private readonly consumesProducesService: INestjsConsumesProducesService) { }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const expectedAccepts = this.reflector.get<ContentTypes[]>(
      DECORATORS.API_PRODUCES,
      context.getHandler()
    ) as ContentTypes[];
    
    
    const isEndPointExistAccept = expectedAccepts && expectedAccepts.length>0 
    if (!isEndPointExistAccept) return true
    const receivedAccepts =  request.headers?.["accept"] ? request.headers?.["accept"].split(",") as ContentTypes[]:null
    if(receivedAccepts?.findIndex(receivedAccept=>receivedAccept=="*/*")>-1) return true
    const extraCondition = this.consumesProducesService.checkProducesExtraCondition(expectedAccepts,receivedAccepts)
    const isNotIntersected = !(receivedAccepts?.filter(value => expectedAccepts.includes(value))?.length>0)


    if (isNotIntersected && extraCondition) {
      const message=  this.consumesProducesService.getProducesErrorText(expectedAccepts,receivedAccepts)
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
    return true


  }
}