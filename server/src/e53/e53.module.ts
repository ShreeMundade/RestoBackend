import { Module } from "@nestjs/common";
import { E53ModuleBase } from "./base/e53.module.base";
import { E53Service } from "./e53.service";
import { E53Controller } from "./e53.controller";
import { E53Resolver } from "./e53.resolver";

@Module({
  imports: [E53ModuleBase],
  controllers: [E53Controller],
  providers: [E53Service, E53Resolver],
  exports: [E53Service],
})
export class E53Module {}
