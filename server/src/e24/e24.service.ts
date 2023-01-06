import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E24ServiceBase } from "./base/e24.service.base";

@Injectable()
export class E24Service extends E24ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
