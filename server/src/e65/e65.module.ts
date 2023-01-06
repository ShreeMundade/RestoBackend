import { Module } from "@nestjs/common";
import { E65ModuleBase } from "./base/e65.module.base";
import { E65Service } from "./e65.service";
import { E65Controller } from "./e65.controller";
import { E65Resolver } from "./e65.resolver";

@Module({
  imports: [E65ModuleBase],
  controllers: [E65Controller],
  providers: [E65Service, E65Resolver],
  exports: [E65Service],
})
export class E65Module {}
