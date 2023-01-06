import { Module } from "@nestjs/common";
import { E64ModuleBase } from "./base/e64.module.base";
import { E64Service } from "./e64.service";
import { E64Controller } from "./e64.controller";
import { E64Resolver } from "./e64.resolver";

@Module({
  imports: [E64ModuleBase],
  controllers: [E64Controller],
  providers: [E64Service, E64Resolver],
  exports: [E64Service],
})
export class E64Module {}
