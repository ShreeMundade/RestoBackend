/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, E5 } from "@prisma/client";

export class E5ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.E5FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E5FindManyArgs>
  ): Promise<number> {
    return this.prisma.e5.count(args);
  }

  async findMany<T extends Prisma.E5FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E5FindManyArgs>
  ): Promise<E5[]> {
    return this.prisma.e5.findMany(args);
  }
  async findOne<T extends Prisma.E5FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.E5FindUniqueArgs>
  ): Promise<E5 | null> {
    return this.prisma.e5.findUnique(args);
  }
  async create<T extends Prisma.E5CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E5CreateArgs>
  ): Promise<E5> {
    return this.prisma.e5.create<T>(args);
  }
  async update<T extends Prisma.E5UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E5UpdateArgs>
  ): Promise<E5> {
    return this.prisma.e5.update<T>(args);
  }
  async delete<T extends Prisma.E5DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.E5DeleteArgs>
  ): Promise<E5> {
    return this.prisma.e5.delete(args);
  }
}
