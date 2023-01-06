import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E16Service } from "./e16.service";
import { E16ControllerBase } from "./base/e16.controller.base";

@swagger.ApiTags("e16s")
@common.Controller("e16s")
export class E16Controller extends E16ControllerBase {
  constructor(
    protected readonly service: E16Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
