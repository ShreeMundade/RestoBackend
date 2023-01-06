import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E58Service } from "./e58.service";
import { E58ControllerBase } from "./base/e58.controller.base";

@swagger.ApiTags("e58s")
@common.Controller("e58s")
export class E58Controller extends E58ControllerBase {
  constructor(
    protected readonly service: E58Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
