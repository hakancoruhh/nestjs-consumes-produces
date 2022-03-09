import { HttpStatus } from "@nestjs/common";
import {ContentTypes} from '../constants'

//export const INestjsConsumesProducesServiceSymbolToken = Symbol("INestjsConsumesProducesService");

export abstract class INestjsConsumesProducesService{
    abstract getTitle(): string;
    abstract getConsumesErrorText(expected:ContentTypes[],received:ContentTypes): string;
    abstract getProducesErrorText(expected:ContentTypes[],received:ContentTypes[]): string;
    abstract getHttpCode(): HttpStatus;
    abstract checkConsumesExtraCondition(expected:ContentTypes[],received:ContentTypes,request:Request):boolean
    abstract checkProducesExtraCondition(expected:ContentTypes[],received:ContentTypes[]):boolean
  }
