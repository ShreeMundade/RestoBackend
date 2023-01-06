import { Module } from "@nestjs/common";
import { E40ModuleBase } from "./base/e40.module.base";
import { E40Service } from "./e40.service";
import { E40Controller } from "./e40.controller";
import { E40Resolver } from "./e40.resolver";

@Module({
  imports: [E40ModuleBase],
  controllers: [E40Controller],
  providers: [E40Service, E40Resolver],
  exports: [E40Service],
})
export class E40Module {}
