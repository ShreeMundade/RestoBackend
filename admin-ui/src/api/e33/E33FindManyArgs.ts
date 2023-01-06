import { E33WhereInput } from "./E33WhereInput";
import { E33OrderByInput } from "./E33OrderByInput";

export type E33FindManyArgs = {
  where?: E33WhereInput;
  orderBy?: Array<E33OrderByInput>;
  skip?: number;
  take?: number;
};
