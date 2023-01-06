import { Module } from "@nestjs/common";
import { E25ModuleBase } from "./base/e25.module.base";
import { E25Service } from "./e25.service";
import { E25Controller } from "./e25.controller";
import { E25Resolver } from "./e25.resolver";

@Module({
  imports: [E25ModuleBase],
  controllers: [E25Controller],
  providers: [E25Service, E25Resolver],
  exports: [E25Service],
})
export class E25Module {}
