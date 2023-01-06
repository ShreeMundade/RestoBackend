import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E20Service } from "./e20.service";
import { E20ControllerBase } from "./base/e20.controller.base";

@swagger.ApiTags("e20s")
@common.Controller("e20s")
export class E20Controller extends E20ControllerBase {
  constructor(
    protected readonly service: E20Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
