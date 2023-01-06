/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, E28 } from "@prisma/client";

export class E28ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.E28FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E28FindManyArgs>
  ): Promise<number> {
    return this.prisma.e28.count(args);
  }

  async findMany<T extends Prisma.E28FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E28FindManyArgs>
  ): Promise<E28[]> {
    return this.prisma.e28.findMany(args);
  }
  async findOne<T extends Prisma.E28FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.E28FindUniqueArgs>
  ): Promise<E28 | null> {
    return this.prisma.e28.findUnique(args);
  }
  async create<T extends Prisma.E28CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E28CreateArgs>
  ): Promise<E28> {
    return this.prisma.e28.create<T>(args);
  }
  async update<T extends Prisma.E28UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E28UpdateArgs>
  ): Promise<E28> {
    return this.prisma.e28.update<T>(args);
  }
  async delete<T extends Prisma.E28DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.E28DeleteArgs>
  ): Promise<E28> {
    return this.prisma.e28.delete(args);
  }
}
