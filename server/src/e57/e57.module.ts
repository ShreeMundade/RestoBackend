import { Module } from "@nestjs/common";
import { E57ModuleBase } from "./base/e57.module.base";
import { E57Service } from "./e57.service";
import { E57Controller } from "./e57.controller";
import { E57Resolver } from "./e57.resolver";

@Module({
  imports: [E57ModuleBase],
  controllers: [E57Controller],
  providers: [E57Service, E57Resolver],
  exports: [E57Service],
})
export class E57Module {}
