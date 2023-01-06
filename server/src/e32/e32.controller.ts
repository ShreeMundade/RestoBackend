import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E32Service } from "./e32.service";
import { E32ControllerBase } from "./base/e32.controller.base";

@swagger.ApiTags("e32s")
@common.Controller("e32s")
export class E32Controller extends E32ControllerBase {
  constructor(
    protected readonly service: E32Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
