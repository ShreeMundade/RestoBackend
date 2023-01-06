import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E57ServiceBase } from "./base/e57.service.base";

@Injectable()
export class E57Service extends E57ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
