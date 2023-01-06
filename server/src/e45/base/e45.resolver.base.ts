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
import { DeleteE45Args } from "./DeleteE45Args";
import { E45FindManyArgs } from "./E45FindManyArgs";
import { E45FindUniqueArgs } from "./E45FindUniqueArgs";
import { E45 } from "./E45";
import { E45Service } from "../e45.service";

@graphql.Resolver(() => E45)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class E45ResolverBase {
  constructor(
    protected readonly service: E45Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "E45",
    action: "read",
    possession: "any",
  })
  async _e45sMeta(
    @graphql.Args() args: E45FindManyArgs
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
  @graphql.Query(() => [E45])
  @nestAccessControl.UseRoles({
    resource: "E45",
    action: "read",
    possession: "any",
  })
  async e45s(@graphql.Args() args: E45FindManyArgs): Promise<E45[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => E45, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "E45",
    action: "read",
    possession: "own",
  })
  async e45(@graphql.Args() args: E45FindUniqueArgs): Promise<E45 | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => E45)
  @nestAccessControl.UseRoles({
    resource: "E45",
    action: "delete",
    possession: "any",
  })
  async deleteE45(@graphql.Args() args: DeleteE45Args): Promise<E45 | null> {
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
