import { Module } from "@nestjs/common";
import { E67ModuleBase } from "./base/e67.module.base";
import { E67Service } from "./e67.service";
import { E67Controller } from "./e67.controller";
import { E67Resolver } from "./e67.resolver";

@Module({
  imports: [E67ModuleBase],
  controllers: [E67Controller],
  providers: [E67Service, E67Resolver],
  exports: [E67Service],
})
export class E67Module {}
