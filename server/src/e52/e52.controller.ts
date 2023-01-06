import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E52Service } from "./e52.service";
import { E52ControllerBase } from "./base/e52.controller.base";

@swagger.ApiTags("e52s")
@common.Controller("e52s")
export class E52Controller extends E52ControllerBase {
  constructor(
    protected readonly service: E52Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
