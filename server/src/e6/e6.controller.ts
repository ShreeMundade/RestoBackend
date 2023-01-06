import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E6Service } from "./e6.service";
import { E6ControllerBase } from "./base/e6.controller.base";

@swagger.ApiTags("e6s")
@common.Controller("e6s")
export class E6Controller extends E6ControllerBase {
  constructor(
    protected readonly service: E6Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
