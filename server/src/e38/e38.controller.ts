import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E38Service } from "./e38.service";
import { E38ControllerBase } from "./base/e38.controller.base";

@swagger.ApiTags("e38s")
@common.Controller("e38s")
export class E38Controller extends E38ControllerBase {
  constructor(
    protected readonly service: E38Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
