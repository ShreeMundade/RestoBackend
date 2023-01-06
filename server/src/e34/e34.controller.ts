import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E34Service } from "./e34.service";
import { E34ControllerBase } from "./base/e34.controller.base";

@swagger.ApiTags("e34s")
@common.Controller("e34s")
export class E34Controller extends E34ControllerBase {
  constructor(
    protected readonly service: E34Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
