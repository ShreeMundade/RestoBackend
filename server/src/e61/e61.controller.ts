import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E61Service } from "./e61.service";
import { E61ControllerBase } from "./base/e61.controller.base";

@swagger.ApiTags("e61s")
@common.Controller("e61s")
export class E61Controller extends E61ControllerBase {
  constructor(
    protected readonly service: E61Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
