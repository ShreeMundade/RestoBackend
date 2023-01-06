import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E47Service } from "./e47.service";
import { E47ControllerBase } from "./base/e47.controller.base";

@swagger.ApiTags("e47s")
@common.Controller("e47s")
export class E47Controller extends E47ControllerBase {
  constructor(
    protected readonly service: E47Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
