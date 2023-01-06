import { Module } from "@nestjs/common";
import { E49ModuleBase } from "./base/e49.module.base";
import { E49Service } from "./e49.service";
import { E49Controller } from "./e49.controller";
import { E49Resolver } from "./e49.resolver";

@Module({
  imports: [E49ModuleBase],
  controllers: [E49Controller],
  providers: [E49Service, E49Resolver],
  exports: [E49Service],
})
export class E49Module {}
