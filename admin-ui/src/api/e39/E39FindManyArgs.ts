import { E39WhereInput } from "./E39WhereInput";
import { E39OrderByInput } from "./E39OrderByInput";

export type E39FindManyArgs = {
  where?: E39WhereInput;
  orderBy?: Array<E39OrderByInput>;
  skip?: number;
  take?: number;
};
