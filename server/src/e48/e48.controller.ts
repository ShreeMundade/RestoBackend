import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E48Service } from "./e48.service";
import { E48ControllerBase } from "./base/e48.controller.base";

@swagger.ApiTags("e48s")
@common.Controller("e48s")
export class E48Controller extends E48ControllerBase {
  constructor(
    protected readonly service: E48Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
