import { Module } from "@nestjs/common";
import { E36ModuleBase } from "./base/e36.module.base";
import { E36Service } from "./e36.service";
import { E36Controller } from "./e36.controller";
import { E36Resolver } from "./e36.resolver";

@Module({
  imports: [E36ModuleBase],
  controllers: [E36Controller],
  providers: [E36Service, E36Resolver],
  exports: [E36Service],
})
export class E36Module {}
