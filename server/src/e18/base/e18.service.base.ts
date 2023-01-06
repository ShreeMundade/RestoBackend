/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, E18 } from "@prisma/client";

export class E18ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.E18FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E18FindManyArgs>
  ): Promise<number> {
    return this.prisma.e18.count(args);
  }

  async findMany<T extends Prisma.E18FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E18FindManyArgs>
  ): Promise<E18[]> {
    return this.prisma.e18.findMany(args);
  }
  async findOne<T extends Prisma.E18FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.E18FindUniqueArgs>
  ): Promise<E18 | null> {
    return this.prisma.e18.findUnique(args);
  }
  async create<T extends Prisma.E18CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E18CreateArgs>
  ): Promise<E18> {
    return this.prisma.e18.create<T>(args);
  }
  async update<T extends Prisma.E18UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E18UpdateArgs>
  ): Promise<E18> {
    return this.prisma.e18.update<T>(args);
  }
  async delete<T extends Prisma.E18DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.E18DeleteArgs>
  ): Promise<E18> {
    return this.prisma.e18.delete(args);
  }
}
