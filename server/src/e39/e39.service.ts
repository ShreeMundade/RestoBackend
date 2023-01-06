import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E39ServiceBase } from "./base/e39.service.base";

@Injectable()
export class E39Service extends E39ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
