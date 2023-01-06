import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E29Service } from "./e29.service";
import { E29ControllerBase } from "./base/e29.controller.base";

@swagger.ApiTags("e29s")
@common.Controller("e29s")
export class E29Controller extends E29ControllerBase {
  constructor(
    protected readonly service: E29Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
