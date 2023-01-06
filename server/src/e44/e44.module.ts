import { Module } from "@nestjs/common";
import { E44ModuleBase } from "./base/e44.module.base";
import { E44Service } from "./e44.service";
import { E44Controller } from "./e44.controller";
import { E44Resolver } from "./e44.resolver";

@Module({
  imports: [E44ModuleBase],
  controllers: [E44Controller],
  providers: [E44Service, E44Resolver],
  exports: [E44Service],
})
export class E44Module {}
