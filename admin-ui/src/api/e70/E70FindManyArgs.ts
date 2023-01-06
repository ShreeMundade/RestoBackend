import { E70WhereInput } from "./E70WhereInput";
import { E70OrderByInput } from "./E70OrderByInput";

export type E70FindManyArgs = {
  where?: E70WhereInput;
  orderBy?: Array<E70OrderByInput>;
  skip?: number;
  take?: number;
};
