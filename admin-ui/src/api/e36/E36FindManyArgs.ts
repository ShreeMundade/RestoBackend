import { E36WhereInput } from "./E36WhereInput";
import { E36OrderByInput } from "./E36OrderByInput";

export type E36FindManyArgs = {
  where?: E36WhereInput;
  orderBy?: Array<E36OrderByInput>;
  skip?: number;
  take?: number;
};
