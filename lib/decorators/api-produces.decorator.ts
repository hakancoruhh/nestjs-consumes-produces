import { DECORATORS, ContentTypes } from '../constants';
import { SetMetadata } from "@nestjs/common";




export const ApiProduces = (...contentFormat: ContentTypes[]) => {
  return SetMetadata(DECORATORS.API_PRODUCES, contentFormat);
};
