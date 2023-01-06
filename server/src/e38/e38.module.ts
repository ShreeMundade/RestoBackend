import { Module } from "@nestjs/common";
import { E38ModuleBase } from "./base/e38.module.base";
import { E38Service } from "./e38.service";
import { E38Controller } from "./e38.controller";
import { E38Resolver } from "./e38.resolver";

@Module({
  imports: [E38ModuleBase],
  controllers: [E38Controller],
  providers: [E38Service, E38Resolver],
  exports: [E38Service],
})
export class E38Module {}
