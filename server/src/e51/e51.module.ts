import { Module } from "@nestjs/common";
import { E51ModuleBase } from "./base/e51.module.base";
import { E51Service } from "./e51.service";
import { E51Controller } from "./e51.controller";
import { E51Resolver } from "./e51.resolver";

@Module({
  imports: [E51ModuleBase],
  controllers: [E51Controller],
  providers: [E51Service, E51Resolver],
  exports: [E51Service],
})
export class E51Module {}
