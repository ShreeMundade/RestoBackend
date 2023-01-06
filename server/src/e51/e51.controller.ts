import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E51Service } from "./e51.service";
import { E51ControllerBase } from "./base/e51.controller.base";

@swagger.ApiTags("e51s")
@common.Controller("e51s")
export class E51Controller extends E51ControllerBase {
  constructor(
    protected readonly service: E51Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
