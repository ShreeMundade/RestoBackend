import { Module } from "@nestjs/common";
import { E23ModuleBase } from "./base/e23.module.base";
import { E23Service } from "./e23.service";
import { E23Controller } from "./e23.controller";
import { E23Resolver } from "./e23.resolver";

@Module({
  imports: [E23ModuleBase],
  controllers: [E23Controller],
  providers: [E23Service, E23Resolver],
  exports: [E23Service],
})
export class E23Module {}
