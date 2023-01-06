import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E52ServiceBase } from "./base/e52.service.base";

@Injectable()
export class E52Service extends E52ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
