import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E10ServiceBase } from "./base/e10.service.base";

@Injectable()
export class E10Service extends E10ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
