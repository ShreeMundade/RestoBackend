import { Module } from "@nestjs/common";
import { E15ModuleBase } from "./base/e15.module.base";
import { E15Service } from "./e15.service";
import { E15Controller } from "./e15.controller";
import { E15Resolver } from "./e15.resolver";

@Module({
  imports: [E15ModuleBase],
  controllers: [E15Controller],
  providers: [E15Service, E15Resolver],
  exports: [E15Service],
})
export class E15Module {}
