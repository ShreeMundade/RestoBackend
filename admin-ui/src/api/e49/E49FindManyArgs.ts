import { E49WhereInput } from "./E49WhereInput";
import { E49OrderByInput } from "./E49OrderByInput";

export type E49FindManyArgs = {
  where?: E49WhereInput;
  orderBy?: Array<E49OrderByInput>;
  skip?: number;
  take?: number;
};
