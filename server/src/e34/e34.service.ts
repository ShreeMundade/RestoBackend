import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E34ServiceBase } from "./base/e34.service.base";

@Injectable()
export class E34Service extends E34ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
