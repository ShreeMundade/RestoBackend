import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E31ServiceBase } from "./base/e31.service.base";

@Injectable()
export class E31Service extends E31ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
