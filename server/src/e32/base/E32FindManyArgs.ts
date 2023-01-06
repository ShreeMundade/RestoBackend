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
import { E32WhereInput } from "./E32WhereInput";
import { Type } from "class-transformer";
import { E32OrderByInput } from "./E32OrderByInput";

@ArgsType()
class E32FindManyArgs {
  @ApiProperty({
    required: false,
    type: () => E32WhereInput,
  })
  @Field(() => E32WhereInput, { nullable: true })
  @Type(() => E32WhereInput)
  where?: E32WhereInput;

  @ApiProperty({
    required: false,
    type: [E32OrderByInput],
  })
  @Field(() => [E32OrderByInput], { nullable: true })
  @Type(() => E32OrderByInput)
  orderBy?: Array<E32OrderByInput>;

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

export { E32FindManyArgs };
