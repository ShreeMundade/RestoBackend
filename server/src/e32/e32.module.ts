import { Module } from "@nestjs/common";
import { E32ModuleBase } from "./base/e32.module.base";
import { E32Service } from "./e32.service";
import { E32Controller } from "./e32.controller";
import { E32Resolver } from "./e32.resolver";

@Module({
  imports: [E32ModuleBase],
  controllers: [E32Controller],
  providers: [E32Service, E32Resolver],
  exports: [E32Service],
})
export class E32Module {}
