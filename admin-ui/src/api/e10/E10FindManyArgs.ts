import { E10WhereInput } from "./E10WhereInput";
import { E10OrderByInput } from "./E10OrderByInput";

export type E10FindManyArgs = {
  where?: E10WhereInput;
  orderBy?: Array<E10OrderByInput>;
  skip?: number;
  take?: number;
};
