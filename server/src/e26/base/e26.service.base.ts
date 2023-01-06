/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, E26 } from "@prisma/client";

export class E26ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.E26FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E26FindManyArgs>
  ): Promise<number> {
    return this.prisma.e26.count(args);
  }

  async findMany<T extends Prisma.E26FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E26FindManyArgs>
  ): Promise<E26[]> {
    return this.prisma.e26.findMany(args);
  }
  async findOne<T extends Prisma.E26FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.E26FindUniqueArgs>
  ): Promise<E26 | null> {
    return this.prisma.e26.findUnique(args);
  }
  async create<T extends Prisma.E26CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E26CreateArgs>
  ): Promise<E26> {
    return this.prisma.e26.create<T>(args);
  }
  async update<T extends Prisma.E26UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E26UpdateArgs>
  ): Promise<E26> {
    return this.prisma.e26.update<T>(args);
  }
  async delete<T extends Prisma.E26DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.E26DeleteArgs>
  ): Promise<E26> {
    return this.prisma.e26.delete(args);
  }
}
