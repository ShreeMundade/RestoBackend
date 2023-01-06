import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E67Service } from "./e67.service";
import { E67ControllerBase } from "./base/e67.controller.base";

@swagger.ApiTags("e67s")
@common.Controller("e67s")
export class E67Controller extends E67ControllerBase {
  constructor(
    protected readonly service: E67Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
