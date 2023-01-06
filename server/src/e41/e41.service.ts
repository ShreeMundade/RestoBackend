import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E41ServiceBase } from "./base/e41.service.base";

@Injectable()
export class E41Service extends E41ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
