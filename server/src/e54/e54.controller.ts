import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E54Service } from "./e54.service";
import { E54ControllerBase } from "./base/e54.controller.base";

@swagger.ApiTags("e54s")
@common.Controller("e54s")
export class E54Controller extends E54ControllerBase {
  constructor(
    protected readonly service: E54Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
