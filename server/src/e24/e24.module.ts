import { Module } from "@nestjs/common";
import { E24ModuleBase } from "./base/e24.module.base";
import { E24Service } from "./e24.service";
import { E24Controller } from "./e24.controller";
import { E24Resolver } from "./e24.resolver";

@Module({
  imports: [E24ModuleBase],
  controllers: [E24Controller],
  providers: [E24Service, E24Resolver],
  exports: [E24Service],
})
export class E24Module {}
