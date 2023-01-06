import { Module } from "@nestjs/common";
import { E61ModuleBase } from "./base/e61.module.base";
import { E61Service } from "./e61.service";
import { E61Controller } from "./e61.controller";
import { E61Resolver } from "./e61.resolver";

@Module({
  imports: [E61ModuleBase],
  controllers: [E61Controller],
  providers: [E61Service, E61Resolver],
  exports: [E61Service],
})
export class E61Module {}
