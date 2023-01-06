import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E48ServiceBase } from "./base/e48.service.base";

@Injectable()
export class E48Service extends E48ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
