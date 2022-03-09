## Description

API Endpoint Consume and Produces module for [Nest](https://github.com/nestjs/nest).

NOTE:Development is currently  in process

## Installation

```bash
$ npm i nestjs-consumes-produces
```

## Usage

Once the installation process is complete, we can import the  NestjsConsumesProducesModule into the root AppModule.

```typescript
import { Module } from '@nestjs/common';
import { NestjsConsumesProducesModule } from "nestjs-consumes-produces";

@Module({
  imports: [
   NestjsConsumesProducesModule.forRoot()
  ],
})
export class AppModule {}
```
Then we can import Guards to our app. You can use one of them. 

```typescript
import { Module } from '@nestjs/common';
import { NestjsConsumesProducesModule,
        ConsumesContentTypeGuard,
        ProducesContentTypeGuard } from "nestjs-consumes-produces";

@Module({
  imports: [
   NestjsConsumesProducesModule.forRoot()
  ],
  providers: [
  {
      provide:APP_GUARD,
      useClass:ConsumesContentTypeGuard
    },
    {
      provide:APP_GUARD,
      useClass:ProducesContentTypeGuard
    },
  ]
})
export class AppModule {}
```


Once this is done,You can protect your end point by Content-Type and Accept header

```typescript
import { Controller, Post,Put } from '@nestjs/common';
import { ApiConsumes, ApiProduces } from "nestjs-consumes-produces";



@Controller('cats')
export class CatsController {
  @Post()
  @ApiConsumes("application/json","application/xml")
  @ApiProduces("application/json")
  create(){
    return 'This action returns all cats';
  }

  @Put()
  @ApiConsumes("application/json")
  @ApiProduces("*/*")
  update(){
    return 'This action returns all cats';
  }
}
```


Also You can change default values and add extra conditions

```typescript
import { Module } from '@nestjs/common';
import { NestjsConsumesProducesModule,
        ConsumesContentTypeGuard,
        ProducesContentTypeGuard,
        ContentTypes } from "nestjs-consumes-produces";

@Injectable()
export class CustomNestjsConsumesProducesService implements INestjsConsumesProducesService{
  isConsumesExtraConditionOk(expected: ContentTypes[], received: ContentTypes, request: Request): boolean {
    return true
  }
  isProducesExtraConditionOk(expected: ContentTypes[], received: ContentTypes[]): boolean {
      return  true
  }


  getConsumesErrorText(expected: ContentTypes[], received: ContentTypes): string {
    return "Custom  text";
  }

  getHttpCode(): HttpStatus {
    return HttpStatus.BAD_REQUEST;
  }

  getProducesErrorText(expected: ContentTypes[], received: ContentTypes[]): string {
    return "Custom  text";
  }

  getTitle(): string {
    return "Custom Title";
  }
}


@Module({
  imports: [
    NestjsConsumesProducesModule.forRootAsync({useClass:NestjsConsumesProducesService}),
  ],
  providers: [
  {
      provide:APP_GUARD,
      useClass:ConsumesContentTypeGuard
    },
    {
      provide:APP_GUARD,
      useClass:ProducesContentTypeGuard
    },
  ]
})
export class AppModule {}
```





## License

nestjs-consumes-produces is [MIT licensed](./LICENSE).