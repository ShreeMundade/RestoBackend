import { Module } from "@nestjs/common";
import { E12ModuleBase } from "./base/e12.module.base";
import { E12Service } from "./e12.service";
import { E12Controller } from "./e12.controller";
import { E12Resolver } from "./e12.resolver";

@Module({
  imports: [E12ModuleBase],
  controllers: [E12Controller],
  providers: [E12Service, E12Resolver],
  exports: [E12Service],
})
export class E12Module {}
