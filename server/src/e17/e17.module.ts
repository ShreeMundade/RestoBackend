import { Module } from "@nestjs/common";
import { E17ModuleBase } from "./base/e17.module.base";
import { E17Service } from "./e17.service";
import { E17Controller } from "./e17.controller";
import { E17Resolver } from "./e17.resolver";

@Module({
  imports: [E17ModuleBase],
  controllers: [E17Controller],
  providers: [E17Service, E17Resolver],
  exports: [E17Service],
})
export class E17Module {}
