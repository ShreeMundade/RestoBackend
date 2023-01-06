import { E37WhereInput } from "./E37WhereInput";
import { E37OrderByInput } from "./E37OrderByInput";

export type E37FindManyArgs = {
  where?: E37WhereInput;
  orderBy?: Array<E37OrderByInput>;
  skip?: number;
  take?: number;
};
