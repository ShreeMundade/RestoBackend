import { Module } from "@nestjs/common";
import { E37ModuleBase } from "./base/e37.module.base";
import { E37Service } from "./e37.service";
import { E37Controller } from "./e37.controller";
import { E37Resolver } from "./e37.resolver";

@Module({
  imports: [E37ModuleBase],
  controllers: [E37Controller],
  providers: [E37Service, E37Resolver],
  exports: [E37Service],
})
export class E37Module {}
