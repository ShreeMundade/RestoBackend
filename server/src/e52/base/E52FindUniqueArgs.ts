/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { E52WhereUniqueInput } from "./E52WhereUniqueInput";

@ArgsType()
class E52FindUniqueArgs {
  @Field(() => E52WhereUniqueInput, { nullable: false })
  where!: E52WhereUniqueInput;
}

export { E52FindUniqueArgs };
