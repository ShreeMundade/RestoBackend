import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E60Service } from "./e60.service";
import { E60ControllerBase } from "./base/e60.controller.base";

@swagger.ApiTags("e60s")
@common.Controller("e60s")
export class E60Controller extends E60ControllerBase {
  constructor(
    protected readonly service: E60Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
