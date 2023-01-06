import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E14Service } from "./e14.service";
import { E14ControllerBase } from "./base/e14.controller.base";

@swagger.ApiTags("e14s")
@common.Controller("e14s")
export class E14Controller extends E14ControllerBase {
  constructor(
    protected readonly service: E14Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
