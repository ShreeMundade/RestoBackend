import { E34WhereInput } from "./E34WhereInput";
import { E34OrderByInput } from "./E34OrderByInput";

export type E34FindManyArgs = {
  where?: E34WhereInput;
  orderBy?: Array<E34OrderByInput>;
  skip?: number;
  take?: number;
};
