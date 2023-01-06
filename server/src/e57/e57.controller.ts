import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E57Service } from "./e57.service";
import { E57ControllerBase } from "./base/e57.controller.base";

@swagger.ApiTags("e57s")
@common.Controller("e57s")
export class E57Controller extends E57ControllerBase {
  constructor(
    protected readonly service: E57Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
