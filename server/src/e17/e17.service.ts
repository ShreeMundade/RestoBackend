import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E17ServiceBase } from "./base/e17.service.base";

@Injectable()
export class E17Service extends E17ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
