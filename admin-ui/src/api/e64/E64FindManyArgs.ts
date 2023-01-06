import { E64WhereInput } from "./E64WhereInput";
import { E64OrderByInput } from "./E64OrderByInput";

export type E64FindManyArgs = {
  where?: E64WhereInput;
  orderBy?: Array<E64OrderByInput>;
  skip?: number;
  take?: number;
};
