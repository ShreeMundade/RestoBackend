import { E13WhereInput } from "./E13WhereInput";
import { E13OrderByInput } from "./E13OrderByInput";

export type E13FindManyArgs = {
  where?: E13WhereInput;
  orderBy?: Array<E13OrderByInput>;
  skip?: number;
  take?: number;
};
