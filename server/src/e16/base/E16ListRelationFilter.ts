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
import { E16WhereInput } from "./E16WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class E16ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => E16WhereInput,
  })
  @ValidateNested()
  @Type(() => E16WhereInput)
  @IsOptional()
  @Field(() => E16WhereInput, {
    nullable: true,
  })
  every?: E16WhereInput;

  @ApiProperty({
    required: false,
    type: () => E16WhereInput,
  })
  @ValidateNested()
  @Type(() => E16WhereInput)
  @IsOptional()
  @Field(() => E16WhereInput, {
    nullable: true,
  })
  some?: E16WhereInput;

  @ApiProperty({
    required: false,
    type: () => E16WhereInput,
  })
  @ValidateNested()
  @Type(() => E16WhereInput)
  @IsOptional()
  @Field(() => E16WhereInput, {
    nullable: true,
  })
  none?: E16WhereInput;
}
export { E16ListRelationFilter };
