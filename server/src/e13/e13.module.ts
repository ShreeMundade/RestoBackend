import { Module } from "@nestjs/common";
import { E13ModuleBase } from "./base/e13.module.base";
import { E13Service } from "./e13.service";
import { E13Controller } from "./e13.controller";
import { E13Resolver } from "./e13.resolver";

@Module({
  imports: [E13ModuleBase],
  controllers: [E13Controller],
  providers: [E13Service, E13Resolver],
  exports: [E13Service],
})
export class E13Module {}
