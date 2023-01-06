import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E18Service } from "./e18.service";
import { E18ControllerBase } from "./base/e18.controller.base";

@swagger.ApiTags("e18s")
@common.Controller("e18s")
export class E18Controller extends E18ControllerBase {
  constructor(
    protected readonly service: E18Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
