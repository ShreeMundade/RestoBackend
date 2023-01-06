import { Module } from "@nestjs/common";
import { E45ModuleBase } from "./base/e45.module.base";
import { E45Service } from "./e45.service";
import { E45Controller } from "./e45.controller";
import { E45Resolver } from "./e45.resolver";

@Module({
  imports: [E45ModuleBase],
  controllers: [E45Controller],
  providers: [E45Service, E45Resolver],
  exports: [E45Service],
})
export class E45Module {}
