import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E59ServiceBase } from "./base/e59.service.base";

@Injectable()
export class E59Service extends E59ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
