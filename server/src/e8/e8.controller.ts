import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E8Service } from "./e8.service";
import { E8ControllerBase } from "./base/e8.controller.base";

@swagger.ApiTags("e8s")
@common.Controller("e8s")
export class E8Controller extends E8ControllerBase {
  constructor(
    protected readonly service: E8Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
