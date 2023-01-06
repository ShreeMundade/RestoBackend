import { Module } from "@nestjs/common";
import { E16ModuleBase } from "./base/e16.module.base";
import { E16Service } from "./e16.service";
import { E16Controller } from "./e16.controller";
import { E16Resolver } from "./e16.resolver";

@Module({
  imports: [E16ModuleBase],
  controllers: [E16Controller],
  providers: [E16Service, E16Resolver],
  exports: [E16Service],
})
export class E16Module {}
