import { E6WhereInput } from "./E6WhereInput";
import { E6OrderByInput } from "./E6OrderByInput";

export type E6FindManyArgs = {
  where?: E6WhereInput;
  orderBy?: Array<E6OrderByInput>;
  skip?: number;
  take?: number;
};
