import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E5ServiceBase } from "./base/e5.service.base";

@Injectable()
export class E5Service extends E5ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
