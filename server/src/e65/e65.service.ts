import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E65ServiceBase } from "./base/e65.service.base";

@Injectable()
export class E65Service extends E65ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
