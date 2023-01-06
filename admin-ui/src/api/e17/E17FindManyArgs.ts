import { E17WhereInput } from "./E17WhereInput";
import { E17OrderByInput } from "./E17OrderByInput";

export type E17FindManyArgs = {
  where?: E17WhereInput;
  orderBy?: Array<E17OrderByInput>;
  skip?: number;
  take?: number;
};
