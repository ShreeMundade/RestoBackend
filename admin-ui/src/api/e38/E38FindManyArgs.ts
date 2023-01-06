import { E38WhereInput } from "./E38WhereInput";
import { E38OrderByInput } from "./E38OrderByInput";

export type E38FindManyArgs = {
  where?: E38WhereInput;
  orderBy?: Array<E38OrderByInput>;
  skip?: number;
  take?: number;
};
