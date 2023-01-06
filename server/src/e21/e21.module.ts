import { Module } from "@nestjs/common";
import { E21ModuleBase } from "./base/e21.module.base";
import { E21Service } from "./e21.service";
import { E21Controller } from "./e21.controller";
import { E21Resolver } from "./e21.resolver";

@Module({
  imports: [E21ModuleBase],
  controllers: [E21Controller],
  providers: [E21Service, E21Resolver],
  exports: [E21Service],
})
export class E21Module {}
