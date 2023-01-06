import { Module } from "@nestjs/common";
import { E30ModuleBase } from "./base/e30.module.base";
import { E30Service } from "./e30.service";
import { E30Controller } from "./e30.controller";
import { E30Resolver } from "./e30.resolver";

@Module({
  imports: [E30ModuleBase],
  controllers: [E30Controller],
  providers: [E30Service, E30Resolver],
  exports: [E30Service],
})
export class E30Module {}
