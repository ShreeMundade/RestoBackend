import { Module } from "@nestjs/common";
import { E41ModuleBase } from "./base/e41.module.base";
import { E41Service } from "./e41.service";
import { E41Controller } from "./e41.controller";
import { E41Resolver } from "./e41.resolver";

@Module({
  imports: [E41ModuleBase],
  controllers: [E41Controller],
  providers: [E41Service, E41Resolver],
  exports: [E41Service],
})
export class E41Module {}
