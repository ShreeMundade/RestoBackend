import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E32ServiceBase } from "./base/e32.service.base";

@Injectable()
export class E32Service extends E32ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
