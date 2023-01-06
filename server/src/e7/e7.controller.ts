import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E7Service } from "./e7.service";
import { E7ControllerBase } from "./base/e7.controller.base";

@swagger.ApiTags("e7s")
@common.Controller("e7s")
export class E7Controller extends E7ControllerBase {
  constructor(
    protected readonly service: E7Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
