import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E53Service } from "./e53.service";
import { E53ControllerBase } from "./base/e53.controller.base";

@swagger.ApiTags("e53s")
@common.Controller("e53s")
export class E53Controller extends E53ControllerBase {
  constructor(
    protected readonly service: E53Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
