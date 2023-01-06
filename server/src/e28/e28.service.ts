import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E28ServiceBase } from "./base/e28.service.base";

@Injectable()
export class E28Service extends E28ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
