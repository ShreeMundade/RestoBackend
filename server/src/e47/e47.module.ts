import { Module } from "@nestjs/common";
import { E47ModuleBase } from "./base/e47.module.base";
import { E47Service } from "./e47.service";
import { E47Controller } from "./e47.controller";
import { E47Resolver } from "./e47.resolver";

@Module({
  imports: [E47ModuleBase],
  controllers: [E47Controller],
  providers: [E47Service, E47Resolver],
  exports: [E47Service],
})
export class E47Module {}
