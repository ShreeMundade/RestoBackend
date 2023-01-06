import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E59Service } from "./e59.service";
import { E59ControllerBase } from "./base/e59.controller.base";

@swagger.ApiTags("e59s")
@common.Controller("e59s")
export class E59Controller extends E59ControllerBase {
  constructor(
    protected readonly service: E59Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
