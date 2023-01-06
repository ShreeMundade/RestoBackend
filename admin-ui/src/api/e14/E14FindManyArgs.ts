import { E14WhereInput } from "./E14WhereInput";
import { E14OrderByInput } from "./E14OrderByInput";

export type E14FindManyArgs = {
  where?: E14WhereInput;
  orderBy?: Array<E14OrderByInput>;
  skip?: number;
  take?: number;
};
