import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E30Service } from "./e30.service";
import { E30ControllerBase } from "./base/e30.controller.base";

@swagger.ApiTags("e30s")
@common.Controller("e30s")
export class E30Controller extends E30ControllerBase {
  constructor(
    protected readonly service: E30Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
