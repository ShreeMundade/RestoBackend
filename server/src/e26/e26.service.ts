import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E26ServiceBase } from "./base/e26.service.base";

@Injectable()
export class E26Service extends E26ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
