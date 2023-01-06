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
import { DeleteE54Args } from "./DeleteE54Args";
import { E54FindManyArgs } from "./E54FindManyArgs";
import { E54FindUniqueArgs } from "./E54FindUniqueArgs";
import { E54 } from "./E54";
import { E54Service } from "../e54.service";

@graphql.Resolver(() => E54)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class E54ResolverBase {
  constructor(
    protected readonly service: E54Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "E54",
    action: "read",
    possession: "any",
  })
  async _e54sMeta(
    @graphql.Args() args: E54FindManyArgs
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
  @graphql.Query(() => [E54])
  @nestAccessControl.UseRoles({
    resource: "E54",
    action: "read",
    possession: "any",
  })
  async e54s(@graphql.Args() args: E54FindManyArgs): Promise<E54[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => E54, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "E54",
    action: "read",
    possession: "own",
  })
  async e54(@graphql.Args() args: E54FindUniqueArgs): Promise<E54 | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => E54)
  @nestAccessControl.UseRoles({
    resource: "E54",
    action: "delete",
    possession: "any",
  })
  async deleteE54(@graphql.Args() args: DeleteE54Args): Promise<E54 | null> {
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
