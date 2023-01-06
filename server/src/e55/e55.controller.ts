import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E55Service } from "./e55.service";
import { E55ControllerBase } from "./base/e55.controller.base";

@swagger.ApiTags("e55s")
@common.Controller("e55s")
export class E55Controller extends E55ControllerBase {
  constructor(
    protected readonly service: E55Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
