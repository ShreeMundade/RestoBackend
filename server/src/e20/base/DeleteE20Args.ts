/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { E20WhereUniqueInput } from "./E20WhereUniqueInput";

@ArgsType()
class DeleteE20Args {
  @Field(() => E20WhereUniqueInput, { nullable: false })
  where!: E20WhereUniqueInput;
}

export { DeleteE20Args };
