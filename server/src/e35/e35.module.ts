import { Module } from "@nestjs/common";
import { E35ModuleBase } from "./base/e35.module.base";
import { E35Service } from "./e35.service";
import { E35Controller } from "./e35.controller";
import { E35Resolver } from "./e35.resolver";

@Module({
  imports: [E35ModuleBase],
  controllers: [E35Controller],
  providers: [E35Service, E35Resolver],
  exports: [E35Service],
})
export class E35Module {}
