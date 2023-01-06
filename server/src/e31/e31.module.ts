import { Module } from "@nestjs/common";
import { E31ModuleBase } from "./base/e31.module.base";
import { E31Service } from "./e31.service";
import { E31Controller } from "./e31.controller";
import { E31Resolver } from "./e31.resolver";

@Module({
  imports: [E31ModuleBase],
  controllers: [E31Controller],
  providers: [E31Service, E31Resolver],
  exports: [E31Service],
})
export class E31Module {}
