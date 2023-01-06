import { Module } from "@nestjs/common";
import { E11ModuleBase } from "./base/e11.module.base";
import { E11Service } from "./e11.service";
import { E11Controller } from "./e11.controller";
import { E11Resolver } from "./e11.resolver";

@Module({
  imports: [E11ModuleBase],
  controllers: [E11Controller],
  providers: [E11Service, E11Resolver],
  exports: [E11Service],
})
export class E11Module {}
