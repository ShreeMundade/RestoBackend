import { Module } from "@nestjs/common";
import { E2ModuleBase } from "./base/e2.module.base";
import { E2Service } from "./e2.service";
import { E2Controller } from "./e2.controller";
import { E2Resolver } from "./e2.resolver";

@Module({
  imports: [E2ModuleBase],
  controllers: [E2Controller],
  providers: [E2Service, E2Resolver],
  exports: [E2Service],
})
export class E2Module {}
