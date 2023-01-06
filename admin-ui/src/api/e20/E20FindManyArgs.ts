import { E20WhereInput } from "./E20WhereInput";
import { E20OrderByInput } from "./E20OrderByInput";

export type E20FindManyArgs = {
  where?: E20WhereInput;
  orderBy?: Array<E20OrderByInput>;
  skip?: number;
  take?: number;
};
