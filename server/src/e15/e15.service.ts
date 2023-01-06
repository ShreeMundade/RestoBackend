import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E15ServiceBase } from "./base/e15.service.base";

@Injectable()
export class E15Service extends E15ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
