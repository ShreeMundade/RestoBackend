import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E43ServiceBase } from "./base/e43.service.base";

@Injectable()
export class E43Service extends E43ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
