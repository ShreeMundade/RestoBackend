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
import { DeleteE26Args } from "./DeleteE26Args";
import { E26FindManyArgs } from "./E26FindManyArgs";
import { E26FindUniqueArgs } from "./E26FindUniqueArgs";
import { E26 } from "./E26";
import { E26Service } from "../e26.service";

@graphql.Resolver(() => E26)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class E26ResolverBase {
  constructor(
    protected readonly service: E26Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "E26",
    action: "read",
    possession: "any",
  })
  async _e26sMeta(
    @graphql.Args() args: E26FindManyArgs
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
  @graphql.Query(() => [E26])
  @nestAccessControl.UseRoles({
    resource: "E26",
    action: "read",
    possession: "any",
  })
  async e26s(@graphql.Args() args: E26FindManyArgs): Promise<E26[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => E26, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "E26",
    action: "read",
    possession: "own",
  })
  async e26(@graphql.Args() args: E26FindUniqueArgs): Promise<E26 | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => E26)
  @nestAccessControl.UseRoles({
    resource: "E26",
    action: "delete",
    possession: "any",
  })
  async deleteE26(@graphql.Args() args: DeleteE26Args): Promise<E26 | null> {
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
