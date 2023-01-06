import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E10Service } from "./e10.service";
import { E10ControllerBase } from "./base/e10.controller.base";

@swagger.ApiTags("e10s")
@common.Controller("e10s")
export class E10Controller extends E10ControllerBase {
  constructor(
    protected readonly service: E10Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
