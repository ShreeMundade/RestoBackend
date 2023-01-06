import { Module } from "@nestjs/common";
import { E62ModuleBase } from "./base/e62.module.base";
import { E62Service } from "./e62.service";
import { E62Controller } from "./e62.controller";
import { E62Resolver } from "./e62.resolver";

@Module({
  imports: [E62ModuleBase],
  controllers: [E62Controller],
  providers: [E62Service, E62Resolver],
  exports: [E62Service],
})
export class E62Module {}
