import { Module } from "@nestjs/common";
import { E20ModuleBase } from "./base/e20.module.base";
import { E20Service } from "./e20.service";
import { E20Controller } from "./e20.controller";
import { E20Resolver } from "./e20.resolver";

@Module({
  imports: [E20ModuleBase],
  controllers: [E20Controller],
  providers: [E20Service, E20Resolver],
  exports: [E20Service],
})
export class E20Module {}
