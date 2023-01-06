import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E27Service } from "./e27.service";
import { E27ControllerBase } from "./base/e27.controller.base";

@swagger.ApiTags("e27s")
@common.Controller("e27s")
export class E27Controller extends E27ControllerBase {
  constructor(
    protected readonly service: E27Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
