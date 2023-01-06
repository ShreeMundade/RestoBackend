import { E40WhereInput } from "./E40WhereInput";
import { E40OrderByInput } from "./E40OrderByInput";

export type E40FindManyArgs = {
  where?: E40WhereInput;
  orderBy?: Array<E40OrderByInput>;
  skip?: number;
  take?: number;
};
