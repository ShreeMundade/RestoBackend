import { E22WhereInput } from "./E22WhereInput";
import { E22OrderByInput } from "./E22OrderByInput";

export type E22FindManyArgs = {
  where?: E22WhereInput;
  orderBy?: Array<E22OrderByInput>;
  skip?: number;
  take?: number;
};
