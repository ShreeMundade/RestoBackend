/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteE64Args } from "./DeleteE64Args";
import { E64FindManyArgs } from "./E64FindManyArgs";
import { E64FindUniqueArgs } from "./E64FindUniqueArgs";
import { E64 } from "./E64";
import { E64Service } from "../e64.service";

@graphql.Resolver(() => E64)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class E64ResolverBase {
  constructor(
    protected readonly service: E64Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "E64",
    action: "read",
    possession: "any",
  })
  async _e64sMeta(
    @graphql.Args() args: E64FindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [E64])
  @nestAccessControl.UseRoles({
    resource: "E64",
    action: "read",
    possession: "any",
  })
  async e64s(@graphql.Args() args: E64FindManyArgs): Promise<E64[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => E64, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "E64",
    action: "read",
    possession: "own",
  })
  async e64(@graphql.Args() args: E64FindUniqueArgs): Promise<E64 | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => E64)
  @nestAccessControl.UseRoles({
    resource: "E64",
    action: "delete",
    possession: "any",
  })
  async deleteE64(@graphql.Args() args: DeleteE64Args): Promise<E64 | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
