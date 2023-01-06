import { Module } from "@nestjs/common";
import { E10ModuleBase } from "./base/e10.module.base";
import { E10Service } from "./e10.service";
import { E10Controller } from "./e10.controller";
import { E10Resolver } from "./e10.resolver";

@Module({
  imports: [E10ModuleBase],
  controllers: [E10Controller],
  providers: [E10Service, E10Resolver],
  exports: [E10Service],
})
export class E10Module {}
