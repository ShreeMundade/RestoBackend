import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E35ServiceBase } from "./base/e35.service.base";

@Injectable()
export class E35Service extends E35ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
