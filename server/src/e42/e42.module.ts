import { Module } from "@nestjs/common";
import { E42ModuleBase } from "./base/e42.module.base";
import { E42Service } from "./e42.service";
import { E42Controller } from "./e42.controller";
import { E42Resolver } from "./e42.resolver";

@Module({
  imports: [E42ModuleBase],
  controllers: [E42Controller],
  providers: [E42Service, E42Resolver],
  exports: [E42Service],
})
export class E42Module {}
