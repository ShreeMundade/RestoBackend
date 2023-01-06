import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E51ServiceBase } from "./base/e51.service.base";

@Injectable()
export class E51Service extends E51ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
