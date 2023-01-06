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
import { E10WhereInput } from "./E10WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class E10ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => E10WhereInput,
  })
  @ValidateNested()
  @Type(() => E10WhereInput)
  @IsOptional()
  @Field(() => E10WhereInput, {
    nullable: true,
  })
  every?: E10WhereInput;

  @ApiProperty({
    required: false,
    type: () => E10WhereInput,
  })
  @ValidateNested()
  @Type(() => E10WhereInput)
  @IsOptional()
  @Field(() => E10WhereInput, {
    nullable: true,
  })
  some?: E10WhereInput;

  @ApiProperty({
    required: false,
    type: () => E10WhereInput,
  })
  @ValidateNested()
  @Type(() => E10WhereInput)
  @IsOptional()
  @Field(() => E10WhereInput, {
    nullable: true,
  })
  none?: E10WhereInput;
}
export { E10ListRelationFilter };
