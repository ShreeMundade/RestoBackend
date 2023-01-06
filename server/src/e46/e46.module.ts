import { Module } from "@nestjs/common";
import { E46ModuleBase } from "./base/e46.module.base";
import { E46Service } from "./e46.service";
import { E46Controller } from "./e46.controller";
import { E46Resolver } from "./e46.resolver";

@Module({
  imports: [E46ModuleBase],
  controllers: [E46Controller],
  providers: [E46Service, E46Resolver],
  exports: [E46Service],
})
export class E46Module {}
