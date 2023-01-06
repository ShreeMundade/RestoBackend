import { E4WhereInput } from "./E4WhereInput";
import { E4OrderByInput } from "./E4OrderByInput";

export type E4FindManyArgs = {
  where?: E4WhereInput;
  orderBy?: Array<E4OrderByInput>;
  skip?: number;
  take?: number;
};
