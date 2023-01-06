import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E42Service } from "./e42.service";
import { E42ControllerBase } from "./base/e42.controller.base";

@swagger.ApiTags("e42s")
@common.Controller("e42s")
export class E42Controller extends E42ControllerBase {
  constructor(
    protected readonly service: E42Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
