import { Module } from "@nestjs/common";
import { E60ModuleBase } from "./base/e60.module.base";
import { E60Service } from "./e60.service";
import { E60Controller } from "./e60.controller";
import { E60Resolver } from "./e60.resolver";

@Module({
  imports: [E60ModuleBase],
  controllers: [E60Controller],
  providers: [E60Service, E60Resolver],
  exports: [E60Service],
})
export class E60Module {}
