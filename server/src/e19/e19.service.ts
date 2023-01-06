import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E19ServiceBase } from "./base/e19.service.base";

@Injectable()
export class E19Service extends E19ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
