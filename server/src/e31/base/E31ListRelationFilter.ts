/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { E31WhereInput } from "./E31WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class E31ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => E31WhereInput,
  })
  @ValidateNested()
  @Type(() => E31WhereInput)
  @IsOptional()
  @Field(() => E31WhereInput, {
    nullable: true,
  })
  every?: E31WhereInput;

  @ApiProperty({
    required: false,
    type: () => E31WhereInput,
  })
  @ValidateNested()
  @Type(() => E31WhereInput)
  @IsOptional()
  @Field(() => E31WhereInput, {
    nullable: true,
  })
  some?: E31WhereInput;

  @ApiProperty({
    required: false,
    type: () => E31WhereInput,
  })
  @ValidateNested()
  @Type(() => E31WhereInput)
  @IsOptional()
  @Field(() => E31WhereInput, {
    nullable: true,
  })
  none?: E31WhereInput;
}
export { E31ListRelationFilter };
