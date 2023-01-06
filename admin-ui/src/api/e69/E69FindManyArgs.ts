import { E69WhereInput } from "./E69WhereInput";
import { E69OrderByInput } from "./E69OrderByInput";

export type E69FindManyArgs = {
  where?: E69WhereInput;
  orderBy?: Array<E69OrderByInput>;
  skip?: number;
  take?: number;
};
