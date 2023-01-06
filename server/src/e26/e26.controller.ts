import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E26Service } from "./e26.service";
import { E26ControllerBase } from "./base/e26.controller.base";

@swagger.ApiTags("e26s")
@common.Controller("e26s")
export class E26Controller extends E26ControllerBase {
  constructor(
    protected readonly service: E26Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
