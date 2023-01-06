import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E40Service } from "./e40.service";
import { E40ControllerBase } from "./base/e40.controller.base";

@swagger.ApiTags("e40s")
@common.Controller("e40s")
export class E40Controller extends E40ControllerBase {
  constructor(
    protected readonly service: E40Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
