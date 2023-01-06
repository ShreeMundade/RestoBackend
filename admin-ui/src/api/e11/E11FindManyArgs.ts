import { E11WhereInput } from "./E11WhereInput";
import { E11OrderByInput } from "./E11OrderByInput";

export type E11FindManyArgs = {
  where?: E11WhereInput;
  orderBy?: Array<E11OrderByInput>;
  skip?: number;
  take?: number;
};
