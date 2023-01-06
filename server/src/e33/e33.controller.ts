import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E33Service } from "./e33.service";
import { E33ControllerBase } from "./base/e33.controller.base";

@swagger.ApiTags("e33s")
@common.Controller("e33s")
export class E33Controller extends E33ControllerBase {
  constructor(
    protected readonly service: E33Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
