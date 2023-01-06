import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E62ServiceBase } from "./base/e62.service.base";

@Injectable()
export class E62Service extends E62ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
