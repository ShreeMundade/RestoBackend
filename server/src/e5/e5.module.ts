import { Module } from "@nestjs/common";
import { E5ModuleBase } from "./base/e5.module.base";
import { E5Service } from "./e5.service";
import { E5Controller } from "./e5.controller";
import { E5Resolver } from "./e5.resolver";

@Module({
  imports: [E5ModuleBase],
  controllers: [E5Controller],
  providers: [E5Service, E5Resolver],
  exports: [E5Service],
})
export class E5Module {}
