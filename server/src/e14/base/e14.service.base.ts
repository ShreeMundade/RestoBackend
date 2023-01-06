/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, E14 } from "@prisma/client";

export class E14ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.E14FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E14FindManyArgs>
  ): Promise<number> {
    return this.prisma.e14.count(args);
  }

  async findMany<T extends Prisma.E14FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E14FindManyArgs>
  ): Promise<E14[]> {
    return this.prisma.e14.findMany(args);
  }
  async findOne<T extends Prisma.E14FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.E14FindUniqueArgs>
  ): Promise<E14 | null> {
    return this.prisma.e14.findUnique(args);
  }
  async create<T extends Prisma.E14CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E14CreateArgs>
  ): Promise<E14> {
    return this.prisma.e14.create<T>(args);
  }
  async update<T extends Prisma.E14UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E14UpdateArgs>
  ): Promise<E14> {
    return this.prisma.e14.update<T>(args);
  }
  async delete<T extends Prisma.E14DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.E14DeleteArgs>
  ): Promise<E14> {
    return this.prisma.e14.delete(args);
  }
}
