import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E46Service } from "./e46.service";
import { E46ControllerBase } from "./base/e46.controller.base";

@swagger.ApiTags("e46s")
@common.Controller("e46s")
export class E46Controller extends E46ControllerBase {
  constructor(
    protected readonly service: E46Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
