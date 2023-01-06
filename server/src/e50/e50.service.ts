import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E50ServiceBase } from "./base/e50.service.base";

@Injectable()
export class E50Service extends E50ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
