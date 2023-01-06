import { Module } from "@nestjs/common";
import { E19ModuleBase } from "./base/e19.module.base";
import { E19Service } from "./e19.service";
import { E19Controller } from "./e19.controller";
import { E19Resolver } from "./e19.resolver";

@Module({
  imports: [E19ModuleBase],
  controllers: [E19Controller],
  providers: [E19Service, E19Resolver],
  exports: [E19Service],
})
export class E19Module {}
