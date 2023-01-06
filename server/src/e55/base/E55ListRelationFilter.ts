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
import { E55WhereInput } from "./E55WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class E55ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => E55WhereInput,
  })
  @ValidateNested()
  @Type(() => E55WhereInput)
  @IsOptional()
  @Field(() => E55WhereInput, {
    nullable: true,
  })
  every?: E55WhereInput;

  @ApiProperty({
    required: false,
    type: () => E55WhereInput,
  })
  @ValidateNested()
  @Type(() => E55WhereInput)
  @IsOptional()
  @Field(() => E55WhereInput, {
    nullable: true,
  })
  some?: E55WhereInput;

  @ApiProperty({
    required: false,
    type: () => E55WhereInput,
  })
  @ValidateNested()
  @Type(() => E55WhereInput)
  @IsOptional()
  @Field(() => E55WhereInput, {
    nullable: true,
  })
  none?: E55WhereInput;
}
export { E55ListRelationFilter };
