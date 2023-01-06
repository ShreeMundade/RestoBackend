import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E31Service } from "./e31.service";
import { E31ControllerBase } from "./base/e31.controller.base";

@swagger.ApiTags("e31s")
@common.Controller("e31s")
export class E31Controller extends E31ControllerBase {
  constructor(
    protected readonly service: E31Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
