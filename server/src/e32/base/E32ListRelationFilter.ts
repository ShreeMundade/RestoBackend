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
import { E32WhereInput } from "./E32WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class E32ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => E32WhereInput,
  })
  @ValidateNested()
  @Type(() => E32WhereInput)
  @IsOptional()
  @Field(() => E32WhereInput, {
    nullable: true,
  })
  every?: E32WhereInput;

  @ApiProperty({
    required: false,
    type: () => E32WhereInput,
  })
  @ValidateNested()
  @Type(() => E32WhereInput)
  @IsOptional()
  @Field(() => E32WhereInput, {
    nullable: true,
  })
  some?: E32WhereInput;

  @ApiProperty({
    required: false,
    type: () => E32WhereInput,
  })
  @ValidateNested()
  @Type(() => E32WhereInput)
  @IsOptional()
  @Field(() => E32WhereInput, {
    nullable: true,
  })
  none?: E32WhereInput;
}
export { E32ListRelationFilter };
