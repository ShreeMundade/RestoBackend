import { Module } from "@nestjs/common";
import { E8ModuleBase } from "./base/e8.module.base";
import { E8Service } from "./e8.service";
import { E8Controller } from "./e8.controller";
import { E8Resolver } from "./e8.resolver";

@Module({
  imports: [E8ModuleBase],
  controllers: [E8Controller],
  providers: [E8Service, E8Resolver],
  exports: [E8Service],
})
export class E8Module {}
