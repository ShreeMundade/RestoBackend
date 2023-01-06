import { E27WhereInput } from "./E27WhereInput";
import { E27OrderByInput } from "./E27OrderByInput";

export type E27FindManyArgs = {
  where?: E27WhereInput;
  orderBy?: Array<E27OrderByInput>;
  skip?: number;
  take?: number;
};
