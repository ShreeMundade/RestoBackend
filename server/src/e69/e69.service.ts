import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E69ServiceBase } from "./base/e69.service.base";

@Injectable()
export class E69Service extends E69ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
