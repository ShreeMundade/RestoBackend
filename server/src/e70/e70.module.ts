import { Module } from "@nestjs/common";
import { E70ModuleBase } from "./base/e70.module.base";
import { E70Service } from "./e70.service";
import { E70Controller } from "./e70.controller";
import { E70Resolver } from "./e70.resolver";

@Module({
  imports: [E70ModuleBase],
  controllers: [E70Controller],
  providers: [E70Service, E70Resolver],
  exports: [E70Service],
})
export class E70Module {}
