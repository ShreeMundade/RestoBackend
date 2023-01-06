import { E16WhereInput } from "./E16WhereInput";
import { E16OrderByInput } from "./E16OrderByInput";

export type E16FindManyArgs = {
  where?: E16WhereInput;
  orderBy?: Array<E16OrderByInput>;
  skip?: number;
  take?: number;
};
