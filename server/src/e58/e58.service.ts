import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E58ServiceBase } from "./base/e58.service.base";

@Injectable()
export class E58Service extends E58ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
