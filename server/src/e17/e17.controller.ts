import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E17Service } from "./e17.service";
import { E17ControllerBase } from "./base/e17.controller.base";

@swagger.ApiTags("e17s")
@common.Controller("e17s")
export class E17Controller extends E17ControllerBase {
  constructor(
    protected readonly service: E17Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
