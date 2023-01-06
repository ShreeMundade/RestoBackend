import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E69Service } from "./e69.service";
import { E69ControllerBase } from "./base/e69.controller.base";

@swagger.ApiTags("e69s")
@common.Controller("e69s")
export class E69Controller extends E69ControllerBase {
  constructor(
    protected readonly service: E69Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
