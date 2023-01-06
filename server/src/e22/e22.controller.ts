import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E22Service } from "./e22.service";
import { E22ControllerBase } from "./base/e22.controller.base";

@swagger.ApiTags("e22s")
@common.Controller("e22s")
export class E22Controller extends E22ControllerBase {
  constructor(
    protected readonly service: E22Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
