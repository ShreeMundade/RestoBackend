import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E37ServiceBase } from "./base/e37.service.base";

@Injectable()
export class E37Service extends E37ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
