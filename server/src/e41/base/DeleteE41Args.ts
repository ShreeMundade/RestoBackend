/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { E41WhereUniqueInput } from "./E41WhereUniqueInput";

@ArgsType()
class DeleteE41Args {
  @Field(() => E41WhereUniqueInput, { nullable: false })
  where!: E41WhereUniqueInput;
}

export { DeleteE41Args };
