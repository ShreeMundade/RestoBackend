import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E12Service } from "./e12.service";
import { E12ControllerBase } from "./base/e12.controller.base";

@swagger.ApiTags("e12s")
@common.Controller("e12s")
export class E12Controller extends E12ControllerBase {
  constructor(
    protected readonly service: E12Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
