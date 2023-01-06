import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E4Service } from "./e4.service";
import { E4ControllerBase } from "./base/e4.controller.base";

@swagger.ApiTags("e4s")
@common.Controller("e4s")
export class E4Controller extends E4ControllerBase {
  constructor(
    protected readonly service: E4Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
