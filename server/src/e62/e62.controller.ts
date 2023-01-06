import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E62Service } from "./e62.service";
import { E62ControllerBase } from "./base/e62.controller.base";

@swagger.ApiTags("e62s")
@common.Controller("e62s")
export class E62Controller extends E62ControllerBase {
  constructor(
    protected readonly service: E62Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
