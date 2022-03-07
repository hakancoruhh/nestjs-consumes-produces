import { HttpStatus } from "@nestjs/common";
import {ContentTypes} from '../constants'



export interface INestjsConsumesProducesService{
    getTitle(): string;
    getConsumesErrorText(expected:ContentTypes[],received:ContentTypes): string;
    getProducesErrorText(expected:ContentTypes[],received:ContentTypes[]): string;
    getHttpCode(): HttpStatus;
    checkConsumesExtraCondition(expected:ContentTypes[],received:ContentTypes):boolean
    checkProducesExtraCondition(expected:ContentTypes[],received:ContentTypes[]):boolean
  }