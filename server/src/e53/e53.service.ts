import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E53ServiceBase } from "./base/e53.service.base";

@Injectable()
export class E53Service extends E53ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
