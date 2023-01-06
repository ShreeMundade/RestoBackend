import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E49ServiceBase } from "./base/e49.service.base";

@Injectable()
export class E49Service extends E49ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
