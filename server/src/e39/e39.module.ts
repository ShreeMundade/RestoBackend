import { Module } from "@nestjs/common";
import { E39ModuleBase } from "./base/e39.module.base";
import { E39Service } from "./e39.service";
import { E39Controller } from "./e39.controller";
import { E39Resolver } from "./e39.resolver";

@Module({
  imports: [E39ModuleBase],
  controllers: [E39Controller],
  providers: [E39Service, E39Resolver],
  exports: [E39Service],
})
export class E39Module {}
