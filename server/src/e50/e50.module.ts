import { Module } from "@nestjs/common";
import { E50ModuleBase } from "./base/e50.module.base";
import { E50Service } from "./e50.service";
import { E50Controller } from "./e50.controller";
import { E50Resolver } from "./e50.resolver";

@Module({
  imports: [E50ModuleBase],
  controllers: [E50Controller],
  providers: [E50Service, E50Resolver],
  exports: [E50Service],
})
export class E50Module {}
