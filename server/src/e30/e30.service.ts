import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E30ServiceBase } from "./base/e30.service.base";

@Injectable()
export class E30Service extends E30ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
