import { E59WhereInput } from "./E59WhereInput";
import { E59OrderByInput } from "./E59OrderByInput";

export type E59FindManyArgs = {
  where?: E59WhereInput;
  orderBy?: Array<E59OrderByInput>;
  skip?: number;
  take?: number;
};
