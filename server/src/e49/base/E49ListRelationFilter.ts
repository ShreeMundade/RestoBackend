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
import { E49WhereInput } from "./E49WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class E49ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => E49WhereInput,
  })
  @ValidateNested()
  @Type(() => E49WhereInput)
  @IsOptional()
  @Field(() => E49WhereInput, {
    nullable: true,
  })
  every?: E49WhereInput;

  @ApiProperty({
    required: false,
    type: () => E49WhereInput,
  })
  @ValidateNested()
  @Type(() => E49WhereInput)
  @IsOptional()
  @Field(() => E49WhereInput, {
    nullable: true,
  })
  some?: E49WhereInput;

  @ApiProperty({
    required: false,
    type: () => E49WhereInput,
  })
  @ValidateNested()
  @Type(() => E49WhereInput)
  @IsOptional()
  @Field(() => E49WhereInput, {
    nullable: true,
  })
  none?: E49WhereInput;
}
export { E49ListRelationFilter };
