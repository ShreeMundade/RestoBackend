import { E50WhereInput } from "./E50WhereInput";
import { E50OrderByInput } from "./E50OrderByInput";

export type E50FindManyArgs = {
  where?: E50WhereInput;
  orderBy?: Array<E50OrderByInput>;
  skip?: number;
  take?: number;
};
