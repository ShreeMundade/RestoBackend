import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E41Service } from "./e41.service";
import { E41ControllerBase } from "./base/e41.controller.base";

@swagger.ApiTags("e41s")
@common.Controller("e41s")
export class E41Controller extends E41ControllerBase {
  constructor(
    protected readonly service: E41Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
