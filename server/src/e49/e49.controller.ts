import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E49Service } from "./e49.service";
import { E49ControllerBase } from "./base/e49.controller.base";

@swagger.ApiTags("e49s")
@common.Controller("e49s")
export class E49Controller extends E49ControllerBase {
  constructor(
    protected readonly service: E49Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
