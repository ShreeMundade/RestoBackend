import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E14ServiceBase } from "./base/e14.service.base";

@Injectable()
export class E14Service extends E14ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
