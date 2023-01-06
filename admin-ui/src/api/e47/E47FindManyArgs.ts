import { E47WhereInput } from "./E47WhereInput";
import { E47OrderByInput } from "./E47OrderByInput";

export type E47FindManyArgs = {
  where?: E47WhereInput;
  orderBy?: Array<E47OrderByInput>;
  skip?: number;
  take?: number;
};
