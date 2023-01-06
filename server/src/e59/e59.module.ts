import { Module } from "@nestjs/common";
import { E59ModuleBase } from "./base/e59.module.base";
import { E59Service } from "./e59.service";
import { E59Controller } from "./e59.controller";
import { E59Resolver } from "./e59.resolver";

@Module({
  imports: [E59ModuleBase],
  controllers: [E59Controller],
  providers: [E59Service, E59Resolver],
  exports: [E59Service],
})
export class E59Module {}
