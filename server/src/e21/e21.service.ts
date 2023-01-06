import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E21ServiceBase } from "./base/e21.service.base";

@Injectable()
export class E21Service extends E21ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
