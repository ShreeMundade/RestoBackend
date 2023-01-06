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
import { DeleteE62Args } from "./DeleteE62Args";
import { E62FindManyArgs } from "./E62FindManyArgs";
import { E62FindUniqueArgs } from "./E62FindUniqueArgs";
import { E62 } from "./E62";
import { E62Service } from "../e62.service";

@graphql.Resolver(() => E62)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class E62ResolverBase {
  constructor(
    protected readonly service: E62Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "E62",
    action: "read",
    possession: "any",
  })
  async _e62sMeta(
    @graphql.Args() args: E62FindManyArgs
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
  @graphql.Query(() => [E62])
  @nestAccessControl.UseRoles({
    resource: "E62",
    action: "read",
    possession: "any",
  })
  async e62s(@graphql.Args() args: E62FindManyArgs): Promise<E62[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => E62, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "E62",
    action: "read",
    possession: "own",
  })
  async e62(@graphql.Args() args: E62FindUniqueArgs): Promise<E62 | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => E62)
  @nestAccessControl.UseRoles({
    resource: "E62",
    action: "delete",
    possession: "any",
  })
  async deleteE62(@graphql.Args() args: DeleteE62Args): Promise<E62 | null> {
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
