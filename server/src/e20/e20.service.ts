import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E20ServiceBase } from "./base/e20.service.base";

@Injectable()
export class E20Service extends E20ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
