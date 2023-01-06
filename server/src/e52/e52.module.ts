import { Module } from "@nestjs/common";
import { E52ModuleBase } from "./base/e52.module.base";
import { E52Service } from "./e52.service";
import { E52Controller } from "./e52.controller";
import { E52Resolver } from "./e52.resolver";

@Module({
  imports: [E52ModuleBase],
  controllers: [E52Controller],
  providers: [E52Service, E52Resolver],
  exports: [E52Service],
})
export class E52Module {}
