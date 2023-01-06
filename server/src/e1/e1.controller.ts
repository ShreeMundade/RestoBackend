import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E1Service } from "./e1.service";
import { E1ControllerBase } from "./base/e1.controller.base";

@swagger.ApiTags("e1s")
@common.Controller("e1s")
export class E1Controller extends E1ControllerBase {
  constructor(
    protected readonly service: E1Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
