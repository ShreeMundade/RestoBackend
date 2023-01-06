import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E8ServiceBase } from "./base/e8.service.base";

@Injectable()
export class E8Service extends E8ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
