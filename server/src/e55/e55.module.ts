import { Module } from "@nestjs/common";
import { E55ModuleBase } from "./base/e55.module.base";
import { E55Service } from "./e55.service";
import { E55Controller } from "./e55.controller";
import { E55Resolver } from "./e55.resolver";

@Module({
  imports: [E55ModuleBase],
  controllers: [E55Controller],
  providers: [E55Service, E55Resolver],
  exports: [E55Service],
})
export class E55Module {}
