import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E36Service } from "./e36.service";
import { E36ControllerBase } from "./base/e36.controller.base";

@swagger.ApiTags("e36s")
@common.Controller("e36s")
export class E36Controller extends E36ControllerBase {
  constructor(
    protected readonly service: E36Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
