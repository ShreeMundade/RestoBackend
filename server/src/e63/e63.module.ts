import { Module } from "@nestjs/common";
import { E63ModuleBase } from "./base/e63.module.base";
import { E63Service } from "./e63.service";
import { E63Controller } from "./e63.controller";
import { E63Resolver } from "./e63.resolver";

@Module({
  imports: [E63ModuleBase],
  controllers: [E63Controller],
  providers: [E63Service, E63Resolver],
  exports: [E63Service],
})
export class E63Module {}
