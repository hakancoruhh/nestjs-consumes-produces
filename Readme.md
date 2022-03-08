<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>




  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

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
import { Controller, Get } from '@nestjs/common';
import { ApiConsumes, ApiProduces } from "nestjs-consumes-produces";



@Controller('cats')
export class CatsController {
  @Post()
  @ApiConsumes("application/json","application/xml")
  @ApiProduces("application/json")
  create(){
    return 'This action returns all cats';
  }

  @Update()
  @ApiConsumes("application/json")
  @ApiProduces("*/*")
  update(){
    return 'This action returns all cats';
  }
}
```





## License

Nest is [MIT licensed](LICENSE).