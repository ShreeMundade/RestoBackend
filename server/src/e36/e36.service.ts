import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E36ServiceBase } from "./base/e36.service.base";

@Injectable()
export class E36Service extends E36ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
