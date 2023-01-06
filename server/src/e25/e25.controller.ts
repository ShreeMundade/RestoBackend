import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E25Service } from "./e25.service";
import { E25ControllerBase } from "./base/e25.controller.base";

@swagger.ApiTags("e25s")
@common.Controller("e25s")
export class E25Controller extends E25ControllerBase {
  constructor(
    protected readonly service: E25Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
