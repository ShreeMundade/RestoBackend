import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E9ServiceBase } from "./base/e9.service.base";

@Injectable()
export class E9Service extends E9ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
