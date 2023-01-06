import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E54ServiceBase } from "./base/e54.service.base";

@Injectable()
export class E54Service extends E54ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
