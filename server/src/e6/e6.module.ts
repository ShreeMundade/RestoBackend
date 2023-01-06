import { Module } from "@nestjs/common";
import { E6ModuleBase } from "./base/e6.module.base";
import { E6Service } from "./e6.service";
import { E6Controller } from "./e6.controller";
import { E6Resolver } from "./e6.resolver";

@Module({
  imports: [E6ModuleBase],
  controllers: [E6Controller],
  providers: [E6Service, E6Resolver],
  exports: [E6Service],
})
export class E6Module {}
