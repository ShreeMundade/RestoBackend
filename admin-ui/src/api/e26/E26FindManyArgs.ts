import { E26WhereInput } from "./E26WhereInput";
import { E26OrderByInput } from "./E26OrderByInput";

export type E26FindManyArgs = {
  where?: E26WhereInput;
  orderBy?: Array<E26OrderByInput>;
  skip?: number;
  take?: number;
};
