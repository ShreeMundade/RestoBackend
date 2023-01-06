import { Module } from "@nestjs/common";
import { E22ModuleBase } from "./base/e22.module.base";
import { E22Service } from "./e22.service";
import { E22Controller } from "./e22.controller";
import { E22Resolver } from "./e22.resolver";

@Module({
  imports: [E22ModuleBase],
  controllers: [E22Controller],
  providers: [E22Service, E22Resolver],
  exports: [E22Service],
})
export class E22Module {}
