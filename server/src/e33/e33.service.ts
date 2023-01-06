import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E33ServiceBase } from "./base/e33.service.base";

@Injectable()
export class E33Service extends E33ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
