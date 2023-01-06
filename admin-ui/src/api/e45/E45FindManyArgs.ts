import { E45WhereInput } from "./E45WhereInput";
import { E45OrderByInput } from "./E45OrderByInput";

export type E45FindManyArgs = {
  where?: E45WhereInput;
  orderBy?: Array<E45OrderByInput>;
  skip?: number;
  take?: number;
};
