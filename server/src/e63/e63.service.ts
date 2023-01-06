import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E63ServiceBase } from "./base/e63.service.base";

@Injectable()
export class E63Service extends E63ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
