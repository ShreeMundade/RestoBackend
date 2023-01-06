import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E11Service } from "./e11.service";
import { E11ControllerBase } from "./base/e11.controller.base";

@swagger.ApiTags("e11s")
@common.Controller("e11s")
export class E11Controller extends E11ControllerBase {
  constructor(
    protected readonly service: E11Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
