import { Module } from "@nestjs/common";
import { E27ModuleBase } from "./base/e27.module.base";
import { E27Service } from "./e27.service";
import { E27Controller } from "./e27.controller";
import { E27Resolver } from "./e27.resolver";

@Module({
  imports: [E27ModuleBase],
  controllers: [E27Controller],
  providers: [E27Service, E27Resolver],
  exports: [E27Service],
})
export class E27Module {}
