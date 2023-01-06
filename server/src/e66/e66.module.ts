import { Module } from "@nestjs/common";
import { E66ModuleBase } from "./base/e66.module.base";
import { E66Service } from "./e66.service";
import { E66Controller } from "./e66.controller";
import { E66Resolver } from "./e66.resolver";

@Module({
  imports: [E66ModuleBase],
  controllers: [E66Controller],
  providers: [E66Service, E66Resolver],
  exports: [E66Service],
})
export class E66Module {}
