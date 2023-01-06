import { Module } from "@nestjs/common";
import { E48ModuleBase } from "./base/e48.module.base";
import { E48Service } from "./e48.service";
import { E48Controller } from "./e48.controller";
import { E48Resolver } from "./e48.resolver";

@Module({
  imports: [E48ModuleBase],
  controllers: [E48Controller],
  providers: [E48Service, E48Resolver],
  exports: [E48Service],
})
export class E48Module {}
