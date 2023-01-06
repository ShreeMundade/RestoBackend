import { Module } from "@nestjs/common";
import { E34ModuleBase } from "./base/e34.module.base";
import { E34Service } from "./e34.service";
import { E34Controller } from "./e34.controller";
import { E34Resolver } from "./e34.resolver";

@Module({
  imports: [E34ModuleBase],
  controllers: [E34Controller],
  providers: [E34Service, E34Resolver],
  exports: [E34Service],
})
export class E34Module {}
