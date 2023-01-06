import { Module } from "@nestjs/common";
import { E69ModuleBase } from "./base/e69.module.base";
import { E69Service } from "./e69.service";
import { E69Controller } from "./e69.controller";
import { E69Resolver } from "./e69.resolver";

@Module({
  imports: [E69ModuleBase],
  controllers: [E69Controller],
  providers: [E69Service, E69Resolver],
  exports: [E69Service],
})
export class E69Module {}
