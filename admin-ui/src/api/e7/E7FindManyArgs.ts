import { E7WhereInput } from "./E7WhereInput";
import { E7OrderByInput } from "./E7OrderByInput";

export type E7FindManyArgs = {
  where?: E7WhereInput;
  orderBy?: Array<E7OrderByInput>;
  skip?: number;
  take?: number;
};
