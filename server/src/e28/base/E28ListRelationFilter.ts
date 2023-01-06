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
import { E28WhereInput } from "./E28WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class E28ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => E28WhereInput,
  })
  @ValidateNested()
  @Type(() => E28WhereInput)
  @IsOptional()
  @Field(() => E28WhereInput, {
    nullable: true,
  })
  every?: E28WhereInput;

  @ApiProperty({
    required: false,
    type: () => E28WhereInput,
  })
  @ValidateNested()
  @Type(() => E28WhereInput)
  @IsOptional()
  @Field(() => E28WhereInput, {
    nullable: true,
  })
  some?: E28WhereInput;

  @ApiProperty({
    required: false,
    type: () => E28WhereInput,
  })
  @ValidateNested()
  @Type(() => E28WhereInput)
  @IsOptional()
  @Field(() => E28WhereInput, {
    nullable: true,
  })
  none?: E28WhereInput;
}
export { E28ListRelationFilter };
