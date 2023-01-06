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
import { E30WhereInput } from "./E30WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class E30ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => E30WhereInput,
  })
  @ValidateNested()
  @Type(() => E30WhereInput)
  @IsOptional()
  @Field(() => E30WhereInput, {
    nullable: true,
  })
  every?: E30WhereInput;

  @ApiProperty({
    required: false,
    type: () => E30WhereInput,
  })
  @ValidateNested()
  @Type(() => E30WhereInput)
  @IsOptional()
  @Field(() => E30WhereInput, {
    nullable: true,
  })
  some?: E30WhereInput;

  @ApiProperty({
    required: false,
    type: () => E30WhereInput,
  })
  @ValidateNested()
  @Type(() => E30WhereInput)
  @IsOptional()
  @Field(() => E30WhereInput, {
    nullable: true,
  })
  none?: E30WhereInput;
}
export { E30ListRelationFilter };
