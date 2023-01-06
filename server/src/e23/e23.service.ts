import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E23ServiceBase } from "./base/e23.service.base";

@Injectable()
export class E23Service extends E23ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
