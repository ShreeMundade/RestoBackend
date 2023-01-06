import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E64ServiceBase } from "./base/e64.service.base";

@Injectable()
export class E64Service extends E64ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
