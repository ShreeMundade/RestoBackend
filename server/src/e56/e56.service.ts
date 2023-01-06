import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E56ServiceBase } from "./base/e56.service.base";

@Injectable()
export class E56Service extends E56ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
