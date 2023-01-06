/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, E15 } from "@prisma/client";

export class E15ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.E15FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E15FindManyArgs>
  ): Promise<number> {
    return this.prisma.e15.count(args);
  }

  async findMany<T extends Prisma.E15FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E15FindManyArgs>
  ): Promise<E15[]> {
    return this.prisma.e15.findMany(args);
  }
  async findOne<T extends Prisma.E15FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.E15FindUniqueArgs>
  ): Promise<E15 | null> {
    return this.prisma.e15.findUnique(args);
  }
  async create<T extends Prisma.E15CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E15CreateArgs>
  ): Promise<E15> {
    return this.prisma.e15.create<T>(args);
  }
  async update<T extends Prisma.E15UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E15UpdateArgs>
  ): Promise<E15> {
    return this.prisma.e15.update<T>(args);
  }
  async delete<T extends Prisma.E15DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.E15DeleteArgs>
  ): Promise<E15> {
    return this.prisma.e15.delete(args);
  }
}
