import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E39Service } from "./e39.service";
import { E39ControllerBase } from "./base/e39.controller.base";

@swagger.ApiTags("e39s")
@common.Controller("e39s")
export class E39Controller extends E39ControllerBase {
  constructor(
    protected readonly service: E39Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
