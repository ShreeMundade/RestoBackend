import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E21Service } from "./e21.service";
import { E21ControllerBase } from "./base/e21.controller.base";

@swagger.ApiTags("e21s")
@common.Controller("e21s")
export class E21Controller extends E21ControllerBase {
  constructor(
    protected readonly service: E21Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
