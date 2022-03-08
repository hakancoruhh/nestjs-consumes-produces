import { DECORATORS,ContentTypes } from '../constants';
import {  SetMetadata } from "@nestjs/common";


  
  export const ApiConsumes = (...contentFormat: ContentTypes[]):MethodDecorator => {
    return SetMetadata(DECORATORS.API_CONSUMES, contentFormat);
  };
  