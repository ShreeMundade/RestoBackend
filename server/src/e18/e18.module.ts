import { Module } from "@nestjs/common";
import { E18ModuleBase } from "./base/e18.module.base";
import { E18Service } from "./e18.service";
import { E18Controller } from "./e18.controller";
import { E18Resolver } from "./e18.resolver";

@Module({
  imports: [E18ModuleBase],
  controllers: [E18Controller],
  providers: [E18Service, E18Resolver],
  exports: [E18Service],
})
export class E18Module {}
