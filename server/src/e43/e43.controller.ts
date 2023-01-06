import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E43Service } from "./e43.service";
import { E43ControllerBase } from "./base/e43.controller.base";

@swagger.ApiTags("e43s")
@common.Controller("e43s")
export class E43Controller extends E43ControllerBase {
  constructor(
    protected readonly service: E43Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
