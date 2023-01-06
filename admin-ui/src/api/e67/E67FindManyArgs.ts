import { E67WhereInput } from "./E67WhereInput";
import { E67OrderByInput } from "./E67OrderByInput";

export type E67FindManyArgs = {
  where?: E67WhereInput;
  orderBy?: Array<E67OrderByInput>;
  skip?: number;
  take?: number;
};
