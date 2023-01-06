/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, E32 } from "@prisma/client";

export class E32ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.E32FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E32FindManyArgs>
  ): Promise<number> {
    return this.prisma.e32.count(args);
  }

  async findMany<T extends Prisma.E32FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E32FindManyArgs>
  ): Promise<E32[]> {
    return this.prisma.e32.findMany(args);
  }
  async findOne<T extends Prisma.E32FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.E32FindUniqueArgs>
  ): Promise<E32 | null> {
    return this.prisma.e32.findUnique(args);
  }
  async create<T extends Prisma.E32CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E32CreateArgs>
  ): Promise<E32> {
    return this.prisma.e32.create<T>(args);
  }
  async update<T extends Prisma.E32UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E32UpdateArgs>
  ): Promise<E32> {
    return this.prisma.e32.update<T>(args);
  }
  async delete<T extends Prisma.E32DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.E32DeleteArgs>
  ): Promise<E32> {
    return this.prisma.e32.delete(args);
  }
}
