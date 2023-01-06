import { Module } from "@nestjs/common";
import { E29ModuleBase } from "./base/e29.module.base";
import { E29Service } from "./e29.service";
import { E29Controller } from "./e29.controller";
import { E29Resolver } from "./e29.resolver";

@Module({
  imports: [E29ModuleBase],
  controllers: [E29Controller],
  providers: [E29Service, E29Resolver],
  exports: [E29Service],
})
export class E29Module {}
