import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E15Service } from "./e15.service";
import { E15ControllerBase } from "./base/e15.controller.base";

@swagger.ApiTags("e15s")
@common.Controller("e15s")
export class E15Controller extends E15ControllerBase {
  constructor(
    protected readonly service: E15Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
