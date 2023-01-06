import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E70ServiceBase } from "./base/e70.service.base";

@Injectable()
export class E70Service extends E70ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
