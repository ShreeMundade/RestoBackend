import { Module } from "@nestjs/common";
import { E56ModuleBase } from "./base/e56.module.base";
import { E56Service } from "./e56.service";
import { E56Controller } from "./e56.controller";
import { E56Resolver } from "./e56.resolver";

@Module({
  imports: [E56ModuleBase],
  controllers: [E56Controller],
  providers: [E56Service, E56Resolver],
  exports: [E56Service],
})
export class E56Module {}
