import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E35Service } from "./e35.service";
import { E35ControllerBase } from "./base/e35.controller.base";

@swagger.ApiTags("e35s")
@common.Controller("e35s")
export class E35Controller extends E35ControllerBase {
  constructor(
    protected readonly service: E35Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
