import { Module } from "@nestjs/common";
import { E68ModuleBase } from "./base/e68.module.base";
import { E68Service } from "./e68.service";
import { E68Controller } from "./e68.controller";
import { E68Resolver } from "./e68.resolver";

@Module({
  imports: [E68ModuleBase],
  controllers: [E68Controller],
  providers: [E68Service, E68Resolver],
  exports: [E68Service],
})
export class E68Module {}
