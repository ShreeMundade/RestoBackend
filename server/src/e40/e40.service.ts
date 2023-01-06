import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E40ServiceBase } from "./base/e40.service.base";

@Injectable()
export class E40Service extends E40ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
