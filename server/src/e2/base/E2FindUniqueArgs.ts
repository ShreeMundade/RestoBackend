/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { E2WhereUniqueInput } from "./E2WhereUniqueInput";

@ArgsType()
class E2FindUniqueArgs {
  @Field(() => E2WhereUniqueInput, { nullable: false })
  where!: E2WhereUniqueInput;
}

export { E2FindUniqueArgs };
