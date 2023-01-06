import { Module } from "@nestjs/common";
import { E58ModuleBase } from "./base/e58.module.base";
import { E58Service } from "./e58.service";
import { E58Controller } from "./e58.controller";
import { E58Resolver } from "./e58.resolver";

@Module({
  imports: [E58ModuleBase],
  controllers: [E58Controller],
  providers: [E58Service, E58Resolver],
  exports: [E58Service],
})
export class E58Module {}
