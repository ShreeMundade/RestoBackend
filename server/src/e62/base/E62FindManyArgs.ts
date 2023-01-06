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
import { E62WhereInput } from "./E62WhereInput";
import { Type } from "class-transformer";
import { E62OrderByInput } from "./E62OrderByInput";

@ArgsType()
class E62FindManyArgs {
  @ApiProperty({
    required: false,
    type: () => E62WhereInput,
  })
  @Field(() => E62WhereInput, { nullable: true })
  @Type(() => E62WhereInput)
  where?: E62WhereInput;

  @ApiProperty({
    required: false,
    type: [E62OrderByInput],
  })
  @Field(() => [E62OrderByInput], { nullable: true })
  @Type(() => E62OrderByInput)
  orderBy?: Array<E62OrderByInput>;

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

export { E62FindManyArgs };
