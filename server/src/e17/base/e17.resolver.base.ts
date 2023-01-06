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
import { DeleteE17Args } from "./DeleteE17Args";
import { E17FindManyArgs } from "./E17FindManyArgs";
import { E17FindUniqueArgs } from "./E17FindUniqueArgs";
import { E17 } from "./E17";
import { E17Service } from "../e17.service";

@graphql.Resolver(() => E17)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class E17ResolverBase {
  constructor(
    protected readonly service: E17Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "E17",
    action: "read",
    possession: "any",
  })
  async _e17sMeta(
    @graphql.Args() args: E17FindManyArgs
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
  @graphql.Query(() => [E17])
  @nestAccessControl.UseRoles({
    resource: "E17",
    action: "read",
    possession: "any",
  })
  async e17s(@graphql.Args() args: E17FindManyArgs): Promise<E17[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => E17, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "E17",
    action: "read",
    possession: "own",
  })
  async e17(@graphql.Args() args: E17FindUniqueArgs): Promise<E17 | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => E17)
  @nestAccessControl.UseRoles({
    resource: "E17",
    action: "delete",
    possession: "any",
  })
  async deleteE17(@graphql.Args() args: DeleteE17Args): Promise<E17 | null> {
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
