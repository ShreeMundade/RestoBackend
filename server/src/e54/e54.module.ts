import { Module } from "@nestjs/common";
import { E54ModuleBase } from "./base/e54.module.base";
import { E54Service } from "./e54.service";
import { E54Controller } from "./e54.controller";
import { E54Resolver } from "./e54.resolver";

@Module({
  imports: [E54ModuleBase],
  controllers: [E54Controller],
  providers: [E54Service, E54Resolver],
  exports: [E54Service],
})
export class E54Module {}
