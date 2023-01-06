import { Module } from "@nestjs/common";
import { E14ModuleBase } from "./base/e14.module.base";
import { E14Service } from "./e14.service";
import { E14Controller } from "./e14.controller";
import { E14Resolver } from "./e14.resolver";

@Module({
  imports: [E14ModuleBase],
  controllers: [E14Controller],
  providers: [E14Service, E14Resolver],
  exports: [E14Service],
})
export class E14Module {}
