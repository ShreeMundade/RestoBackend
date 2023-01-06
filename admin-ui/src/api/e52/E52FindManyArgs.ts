import { E52WhereInput } from "./E52WhereInput";
import { E52OrderByInput } from "./E52OrderByInput";

export type E52FindManyArgs = {
  where?: E52WhereInput;
  orderBy?: Array<E52OrderByInput>;
  skip?: number;
  take?: number;
};
