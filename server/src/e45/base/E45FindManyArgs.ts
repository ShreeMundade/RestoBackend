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
import { E45WhereInput } from "./E45WhereInput";
import { Type } from "class-transformer";
import { E45OrderByInput } from "./E45OrderByInput";

@ArgsType()
class E45FindManyArgs {
  @ApiProperty({
    required: false,
    type: () => E45WhereInput,
  })
  @Field(() => E45WhereInput, { nullable: true })
  @Type(() => E45WhereInput)
  where?: E45WhereInput;

  @ApiProperty({
    required: false,
    type: [E45OrderByInput],
  })
  @Field(() => [E45OrderByInput], { nullable: true })
  @Type(() => E45OrderByInput)
  orderBy?: Array<E45OrderByInput>;

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

export { E45FindManyArgs };
