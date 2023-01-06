import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E68ServiceBase } from "./base/e68.service.base";

@Injectable()
export class E68Service extends E68ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
