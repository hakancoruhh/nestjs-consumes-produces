import { HttpException, HttpStatus, } from "@nestjs/common";

export class HttpNestjsConsumeProduceException extends HttpException {
  constructor(response: { message: string; name: string }, status: HttpStatus) {
    super(response, status);
  }
}