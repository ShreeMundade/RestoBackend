import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E46ServiceBase } from "./base/e46.service.base";

@Injectable()
export class E46Service extends E46ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
