import { E55WhereInput } from "./E55WhereInput";
import { E55OrderByInput } from "./E55OrderByInput";

export type E55FindManyArgs = {
  where?: E55WhereInput;
  orderBy?: Array<E55OrderByInput>;
  skip?: number;
  take?: number;
};
