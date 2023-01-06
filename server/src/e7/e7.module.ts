import { Module } from "@nestjs/common";
import { E7ModuleBase } from "./base/e7.module.base";
import { E7Service } from "./e7.service";
import { E7Controller } from "./e7.controller";
import { E7Resolver } from "./e7.resolver";

@Module({
  imports: [E7ModuleBase],
  controllers: [E7Controller],
  providers: [E7Service, E7Resolver],
  exports: [E7Service],
})
export class E7Module {}
