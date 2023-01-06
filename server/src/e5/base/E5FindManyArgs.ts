/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { E5WhereInput } from "./E5WhereInput";
import { Type } from "class-transformer";
import { E5OrderByInput } from "./E5OrderByInput";

@ArgsType()
class E5FindManyArgs {
  @ApiProperty({
    required: false,
    type: () => E5WhereInput,
  })
  @Field(() => E5WhereInput, { nullable: true })
  @Type(() => E5WhereInput)
  where?: E5WhereInput;

  @ApiProperty({
    required: false,
    type: [E5OrderByInput],
  })
  @Field(() => [E5OrderByInput], { nullable: true })
  @Type(() => E5OrderByInput)
  orderBy?: Array<E5OrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { E5FindManyArgs };
