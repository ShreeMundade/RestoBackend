import { E42WhereInput } from "./E42WhereInput";
import { E42OrderByInput } from "./E42OrderByInput";

export type E42FindManyArgs = {
  where?: E42WhereInput;
  orderBy?: Array<E42OrderByInput>;
  skip?: number;
  take?: number;
};
