import { Module } from "@nestjs/common";
import { E26ModuleBase } from "./base/e26.module.base";
import { E26Service } from "./e26.service";
import { E26Controller } from "./e26.controller";
import { E26Resolver } from "./e26.resolver";

@Module({
  imports: [E26ModuleBase],
  controllers: [E26Controller],
  providers: [E26Service, E26Resolver],
  exports: [E26Service],
})
export class E26Module {}
