import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E29ServiceBase } from "./base/e29.service.base";

@Injectable()
export class E29Service extends E29ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
