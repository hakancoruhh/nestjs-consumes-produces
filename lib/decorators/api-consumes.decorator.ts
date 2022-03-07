import { DECORATORS,ContentTypes } from '../constants';
import {  SetMetadata } from "@nestjs/common";



  
  export const ApiConsumes = (...contentFormat: ContentTypes[]) => {
    return SetMetadata(DECORATORS.API_CONSUMES, contentFormat);
  };
  