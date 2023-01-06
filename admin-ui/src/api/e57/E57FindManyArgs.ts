import { E57WhereInput } from "./E57WhereInput";
import { E57OrderByInput } from "./E57OrderByInput";

export type E57FindManyArgs = {
  where?: E57WhereInput;
  orderBy?: Array<E57OrderByInput>;
  skip?: number;
  take?: number;
};
