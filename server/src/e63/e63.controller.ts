import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E63Service } from "./e63.service";
import { E63ControllerBase } from "./base/e63.controller.base";

@swagger.ApiTags("e63s")
@common.Controller("e63s")
export class E63Controller extends E63ControllerBase {
  constructor(
    protected readonly service: E63Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
