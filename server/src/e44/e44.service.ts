import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E44ServiceBase } from "./base/e44.service.base";

@Injectable()
export class E44Service extends E44ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
