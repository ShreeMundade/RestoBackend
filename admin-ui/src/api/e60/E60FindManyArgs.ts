import { E60WhereInput } from "./E60WhereInput";
import { E60OrderByInput } from "./E60OrderByInput";

export type E60FindManyArgs = {
  where?: E60WhereInput;
  orderBy?: Array<E60OrderByInput>;
  skip?: number;
  take?: number;
};
