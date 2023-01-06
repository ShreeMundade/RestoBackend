/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, E12 } from "@prisma/client";

export class E12ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.E12FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E12FindManyArgs>
  ): Promise<number> {
    return this.prisma.e12.count(args);
  }

  async findMany<T extends Prisma.E12FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E12FindManyArgs>
  ): Promise<E12[]> {
    return this.prisma.e12.findMany(args);
  }
  async findOne<T extends Prisma.E12FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.E12FindUniqueArgs>
  ): Promise<E12 | null> {
    return this.prisma.e12.findUnique(args);
  }
  async create<T extends Prisma.E12CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E12CreateArgs>
  ): Promise<E12> {
    return this.prisma.e12.create<T>(args);
  }
  async update<T extends Prisma.E12UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E12UpdateArgs>
  ): Promise<E12> {
    return this.prisma.e12.update<T>(args);
  }
  async delete<T extends Prisma.E12DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.E12DeleteArgs>
  ): Promise<E12> {
    return this.prisma.e12.delete(args);
  }
}
