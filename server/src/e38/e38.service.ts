import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E38ServiceBase } from "./base/e38.service.base";

@Injectable()
export class E38Service extends E38ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
