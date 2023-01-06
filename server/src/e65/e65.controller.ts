import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E65Service } from "./e65.service";
import { E65ControllerBase } from "./base/e65.controller.base";

@swagger.ApiTags("e65s")
@common.Controller("e65s")
export class E65Controller extends E65ControllerBase {
  constructor(
    protected readonly service: E65Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
