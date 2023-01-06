import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E67ServiceBase } from "./base/e67.service.base";

@Injectable()
export class E67Service extends E67ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
