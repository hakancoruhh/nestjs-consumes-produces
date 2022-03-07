import { DECORATORS, ContentTypes } from "../constants";
import { CanActivate, ExecutionContext, HttpStatus, Injectable, SetMetadata } from "@nestjs/common";
import { Reflector } from "@nestjs/core";



@Injectable()
export class ConsumesContentTypeGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const contentTypes = this.reflector.get<ContentTypes[]>(
      DECORATORS.API_CONSUMES,
      context.getHandler()
    ) as ContentTypes[];

    const isExist = contentTypes&& contentTypes.length>0 
  
    if (contentTypes&& contentTypes.length>0 && request.headers?.["content-type"] != contentFormat) {
      throw new HttpErrorException(
        {
          message:
            "The requested resource is capable of generating only content not acceptable according to the Content-type headers sent in the request",
          name: "NOT VALID",
        },
        HttpStatus.NOT_ACCEPTABLE
      );
    }

    return true;
  }
}