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
import { E11WhereInput } from "./E11WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class E11ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => E11WhereInput,
  })
  @ValidateNested()
  @Type(() => E11WhereInput)
  @IsOptional()
  @Field(() => E11WhereInput, {
    nullable: true,
  })
  every?: E11WhereInput;

  @ApiProperty({
    required: false,
    type: () => E11WhereInput,
  })
  @ValidateNested()
  @Type(() => E11WhereInput)
  @IsOptional()
  @Field(() => E11WhereInput, {
    nullable: true,
  })
  some?: E11WhereInput;

  @ApiProperty({
    required: false,
    type: () => E11WhereInput,
  })
  @ValidateNested()
  @Type(() => E11WhereInput)
  @IsOptional()
  @Field(() => E11WhereInput, {
    nullable: true,
  })
  none?: E11WhereInput;
}
export { E11ListRelationFilter };
