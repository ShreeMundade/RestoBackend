import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E66ServiceBase } from "./base/e66.service.base";

@Injectable()
export class E66Service extends E66ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
