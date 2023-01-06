import { E19WhereInput } from "./E19WhereInput";
import { E19OrderByInput } from "./E19OrderByInput";

export type E19FindManyArgs = {
  where?: E19WhereInput;
  orderBy?: Array<E19OrderByInput>;
  skip?: number;
  take?: number;
};
