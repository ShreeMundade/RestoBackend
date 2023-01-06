import { E12WhereInput } from "./E12WhereInput";
import { E12OrderByInput } from "./E12OrderByInput";

export type E12FindManyArgs = {
  where?: E12WhereInput;
  orderBy?: Array<E12OrderByInput>;
  skip?: number;
  take?: number;
};
