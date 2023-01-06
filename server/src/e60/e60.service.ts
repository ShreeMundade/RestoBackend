import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E60ServiceBase } from "./base/e60.service.base";

@Injectable()
export class E60Service extends E60ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
