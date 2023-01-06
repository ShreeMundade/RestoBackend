import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E24Service } from "./e24.service";
import { E24ControllerBase } from "./base/e24.controller.base";

@swagger.ApiTags("e24s")
@common.Controller("e24s")
export class E24Controller extends E24ControllerBase {
  constructor(
    protected readonly service: E24Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
