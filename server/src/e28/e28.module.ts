import { Module } from "@nestjs/common";
import { E28ModuleBase } from "./base/e28.module.base";
import { E28Service } from "./e28.service";
import { E28Controller } from "./e28.controller";
import { E28Resolver } from "./e28.resolver";

@Module({
  imports: [E28ModuleBase],
  controllers: [E28Controller],
  providers: [E28Service, E28Resolver],
  exports: [E28Service],
})
export class E28Module {}
