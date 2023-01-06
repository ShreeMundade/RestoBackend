import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E64Service } from "./e64.service";
import { E64ControllerBase } from "./base/e64.controller.base";

@swagger.ApiTags("e64s")
@common.Controller("e64s")
export class E64Controller extends E64ControllerBase {
  constructor(
    protected readonly service: E64Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
