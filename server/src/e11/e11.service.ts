import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E11ServiceBase } from "./base/e11.service.base";

@Injectable()
export class E11Service extends E11ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
