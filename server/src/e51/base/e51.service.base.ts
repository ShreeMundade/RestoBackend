/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, E51 } from "@prisma/client";

export class E51ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.E51FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E51FindManyArgs>
  ): Promise<number> {
    return this.prisma.e51.count(args);
  }

  async findMany<T extends Prisma.E51FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.E51FindManyArgs>
  ): Promise<E51[]> {
    return this.prisma.e51.findMany(args);
  }
  async findOne<T extends Prisma.E51FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.E51FindUniqueArgs>
  ): Promise<E51 | null> {
    return this.prisma.e51.findUnique(args);
  }
  async create<T extends Prisma.E51CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E51CreateArgs>
  ): Promise<E51> {
    return this.prisma.e51.create<T>(args);
  }
  async update<T extends Prisma.E51UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.E51UpdateArgs>
  ): Promise<E51> {
    return this.prisma.e51.update<T>(args);
  }
  async delete<T extends Prisma.E51DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.E51DeleteArgs>
  ): Promise<E51> {
    return this.prisma.e51.delete(args);
  }
}
