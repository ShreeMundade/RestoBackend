import { E9WhereInput } from "./E9WhereInput";
import { E9OrderByInput } from "./E9OrderByInput";

export type E9FindManyArgs = {
  where?: E9WhereInput;
  orderBy?: Array<E9OrderByInput>;
  skip?: number;
  take?: number;
};
