import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E13Service } from "./e13.service";
import { E13ControllerBase } from "./base/e13.controller.base";

@swagger.ApiTags("e13s")
@common.Controller("e13s")
export class E13Controller extends E13ControllerBase {
  constructor(
    protected readonly service: E13Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
