import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E13ServiceBase } from "./base/e13.service.base";

@Injectable()
export class E13Service extends E13ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
