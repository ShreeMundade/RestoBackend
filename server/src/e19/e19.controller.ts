import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E19Service } from "./e19.service";
import { E19ControllerBase } from "./base/e19.controller.base";

@swagger.ApiTags("e19s")
@common.Controller("e19s")
export class E19Controller extends E19ControllerBase {
  constructor(
    protected readonly service: E19Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
