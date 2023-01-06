import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E45Service } from "./e45.service";
import { E45ControllerBase } from "./base/e45.controller.base";

@swagger.ApiTags("e45s")
@common.Controller("e45s")
export class E45Controller extends E45ControllerBase {
  constructor(
    protected readonly service: E45Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
