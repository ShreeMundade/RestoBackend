import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E5Service } from "./e5.service";
import { E5ControllerBase } from "./base/e5.controller.base";

@swagger.ApiTags("e5s")
@common.Controller("e5s")
export class E5Controller extends E5ControllerBase {
  constructor(
    protected readonly service: E5Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
