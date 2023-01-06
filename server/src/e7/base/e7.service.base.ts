/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, E7 } from "@prisma/client";

export class E7ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.E7FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E7FindManyArgs>
  ): Promise<number> {
    return this.prisma.e7.count(args);
  }

  async findMany<T extends Prisma.E7FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E7FindManyArgs>
  ): Promise<E7[]> {
    return this.prisma.e7.findMany(args);
  }
  async findOne<T extends Prisma.E7FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.E7FindUniqueArgs>
  ): Promise<E7 | null> {
    return this.prisma.e7.findUnique(args);
  }
  async create<T extends Prisma.E7CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E7CreateArgs>
  ): Promise<E7> {
    return this.prisma.e7.create<T>(args);
  }
  async update<T extends Prisma.E7UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E7UpdateArgs>
  ): Promise<E7> {
    return this.prisma.e7.update<T>(args);
  }
  async delete<T extends Prisma.E7DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.E7DeleteArgs>
  ): Promise<E7> {
    return this.prisma.e7.delete(args);
  }
}
