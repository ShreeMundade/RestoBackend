import { E29WhereInput } from "./E29WhereInput";
import { E29OrderByInput } from "./E29OrderByInput";

export type E29FindManyArgs = {
  where?: E29WhereInput;
  orderBy?: Array<E29OrderByInput>;
  skip?: number;
  take?: number;
};
