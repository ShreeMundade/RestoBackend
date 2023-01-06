import { E35WhereInput } from "./E35WhereInput";
import { E35OrderByInput } from "./E35OrderByInput";

export type E35FindManyArgs = {
  where?: E35WhereInput;
  orderBy?: Array<E35OrderByInput>;
  skip?: number;
  take?: number;
};
