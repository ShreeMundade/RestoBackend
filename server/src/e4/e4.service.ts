import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E4ServiceBase } from "./base/e4.service.base";

@Injectable()
export class E4Service extends E4ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
