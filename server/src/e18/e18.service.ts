import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E18ServiceBase } from "./base/e18.service.base";

@Injectable()
export class E18Service extends E18ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
