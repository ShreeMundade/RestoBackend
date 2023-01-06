import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E28Service } from "./e28.service";
import { E28ControllerBase } from "./base/e28.controller.base";

@swagger.ApiTags("e28s")
@common.Controller("e28s")
export class E28Controller extends E28ControllerBase {
  constructor(
    protected readonly service: E28Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
