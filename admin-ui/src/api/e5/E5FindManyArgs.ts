import { E5WhereInput } from "./E5WhereInput";
import { E5OrderByInput } from "./E5OrderByInput";

export type E5FindManyArgs = {
  where?: E5WhereInput;
  orderBy?: Array<E5OrderByInput>;
  skip?: number;
  take?: number;
};
