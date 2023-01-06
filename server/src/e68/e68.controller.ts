import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E68Service } from "./e68.service";
import { E68ControllerBase } from "./base/e68.controller.base";

@swagger.ApiTags("e68s")
@common.Controller("e68s")
export class E68Controller extends E68ControllerBase {
  constructor(
    protected readonly service: E68Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
