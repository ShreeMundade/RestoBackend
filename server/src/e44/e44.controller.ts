import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E44Service } from "./e44.service";
import { E44ControllerBase } from "./base/e44.controller.base";

@swagger.ApiTags("e44s")
@common.Controller("e44s")
export class E44Controller extends E44ControllerBase {
  constructor(
    protected readonly service: E44Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
