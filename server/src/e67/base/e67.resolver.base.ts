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
import { DeleteE67Args } from "./DeleteE67Args";
import { E67FindManyArgs } from "./E67FindManyArgs";
import { E67FindUniqueArgs } from "./E67FindUniqueArgs";
import { E67 } from "./E67";
import { E67Service } from "../e67.service";

@graphql.Resolver(() => E67)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class E67ResolverBase {
  constructor(
    protected readonly service: E67Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "E67",
    action: "read",
    possession: "any",
  })
  async _e67sMeta(
    @graphql.Args() args: E67FindManyArgs
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
  @graphql.Query(() => [E67])
  @nestAccessControl.UseRoles({
    resource: "E67",
    action: "read",
    possession: "any",
  })
  async e67s(@graphql.Args() args: E67FindManyArgs): Promise<E67[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => E67, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "E67",
    action: "read",
    possession: "own",
  })
  async e67(@graphql.Args() args: E67FindUniqueArgs): Promise<E67 | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => E67)
  @nestAccessControl.UseRoles({
    resource: "E67",
    action: "delete",
    possession: "any",
  })
  async deleteE67(@graphql.Args() args: DeleteE67Args): Promise<E67 | null> {
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
