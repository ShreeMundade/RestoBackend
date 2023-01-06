import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E70Service } from "./e70.service";
import { E70ControllerBase } from "./base/e70.controller.base";

@swagger.ApiTags("e70s")
@common.Controller("e70s")
export class E70Controller extends E70ControllerBase {
  constructor(
    protected readonly service: E70Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
