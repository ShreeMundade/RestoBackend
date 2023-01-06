import { E62WhereInput } from "./E62WhereInput";
import { E62OrderByInput } from "./E62OrderByInput";

export type E62FindManyArgs = {
  where?: E62WhereInput;
  orderBy?: Array<E62OrderByInput>;
  skip?: number;
  take?: number;
};
