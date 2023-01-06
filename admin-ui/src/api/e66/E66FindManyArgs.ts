import { E66WhereInput } from "./E66WhereInput";
import { E66OrderByInput } from "./E66OrderByInput";

export type E66FindManyArgs = {
  where?: E66WhereInput;
  orderBy?: Array<E66OrderByInput>;
  skip?: number;
  take?: number;
};
