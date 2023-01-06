import { E58WhereInput } from "./E58WhereInput";
import { E58OrderByInput } from "./E58OrderByInput";

export type E58FindManyArgs = {
  where?: E58WhereInput;
  orderBy?: Array<E58OrderByInput>;
  skip?: number;
  take?: number;
};
