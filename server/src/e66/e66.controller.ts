import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E66Service } from "./e66.service";
import { E66ControllerBase } from "./base/e66.controller.base";

@swagger.ApiTags("e66s")
@common.Controller("e66s")
export class E66Controller extends E66ControllerBase {
  constructor(
    protected readonly service: E66Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
