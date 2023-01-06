import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E61ServiceBase } from "./base/e61.service.base";

@Injectable()
export class E61Service extends E61ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
