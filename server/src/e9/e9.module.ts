import { Module } from "@nestjs/common";
import { E9ModuleBase } from "./base/e9.module.base";
import { E9Service } from "./e9.service";
import { E9Controller } from "./e9.controller";
import { E9Resolver } from "./e9.resolver";

@Module({
  imports: [E9ModuleBase],
  controllers: [E9Controller],
  providers: [E9Service, E9Resolver],
  exports: [E9Service],
})
export class E9Module {}
