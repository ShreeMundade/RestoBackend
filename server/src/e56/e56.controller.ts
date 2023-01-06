import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E56Service } from "./e56.service";
import { E56ControllerBase } from "./base/e56.controller.base";

@swagger.ApiTags("e56s")
@common.Controller("e56s")
export class E56Controller extends E56ControllerBase {
  constructor(
    protected readonly service: E56Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
