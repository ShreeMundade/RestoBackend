import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E50Service } from "./e50.service";
import { E50ControllerBase } from "./base/e50.controller.base";

@swagger.ApiTags("e50s")
@common.Controller("e50s")
export class E50Controller extends E50ControllerBase {
  constructor(
    protected readonly service: E50Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
