/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { E8WhereUniqueInput } from "./E8WhereUniqueInput";

@ArgsType()
class E8FindUniqueArgs {
  @Field(() => E8WhereUniqueInput, { nullable: false })
  where!: E8WhereUniqueInput;
}

export { E8FindUniqueArgs };
