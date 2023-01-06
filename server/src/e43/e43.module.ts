import { Module } from "@nestjs/common";
import { E43ModuleBase } from "./base/e43.module.base";
import { E43Service } from "./e43.service";
import { E43Controller } from "./e43.controller";
import { E43Resolver } from "./e43.resolver";

@Module({
  imports: [E43ModuleBase],
  controllers: [E43Controller],
  providers: [E43Service, E43Resolver],
  exports: [E43Service],
})
export class E43Module {}
