import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E23Service } from "./e23.service";
import { E23ControllerBase } from "./base/e23.controller.base";

@swagger.ApiTags("e23s")
@common.Controller("e23s")
export class E23Controller extends E23ControllerBase {
  constructor(
    protected readonly service: E23Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
