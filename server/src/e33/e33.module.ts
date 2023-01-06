import { Module } from "@nestjs/common";
import { E33ModuleBase } from "./base/e33.module.base";
import { E33Service } from "./e33.service";
import { E33Controller } from "./e33.controller";
import { E33Resolver } from "./e33.resolver";

@Module({
  imports: [E33ModuleBase],
  controllers: [E33Controller],
  providers: [E33Service, E33Resolver],
  exports: [E33Service],
})
export class E33Module {}
