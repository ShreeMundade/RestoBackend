import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E9Service } from "./e9.service";
import { E9ControllerBase } from "./base/e9.controller.base";

@swagger.ApiTags("e9s")
@common.Controller("e9s")
export class E9Controller extends E9ControllerBase {
  constructor(
    protected readonly service: E9Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
