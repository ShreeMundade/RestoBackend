import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E37Service } from "./e37.service";
import { E37ControllerBase } from "./base/e37.controller.base";

@swagger.ApiTags("e37s")
@common.Controller("e37s")
export class E37Controller extends E37ControllerBase {
  constructor(
    protected readonly service: E37Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
