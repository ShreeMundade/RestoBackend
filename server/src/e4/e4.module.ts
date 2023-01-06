import { Module } from "@nestjs/common";
import { E4ModuleBase } from "./base/e4.module.base";
import { E4Service } from "./e4.service";
import { E4Controller } from "./e4.controller";
import { E4Resolver } from "./e4.resolver";

@Module({
  imports: [E4ModuleBase],
  controllers: [E4Controller],
  providers: [E4Service, E4Resolver],
  exports: [E4Service],
})
export class E4Module {}
