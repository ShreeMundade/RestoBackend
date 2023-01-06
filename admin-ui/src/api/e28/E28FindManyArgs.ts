import { E28WhereInput } from "./E28WhereInput";
import { E28OrderByInput } from "./E28OrderByInput";

export type E28FindManyArgs = {
  where?: E28WhereInput;
  orderBy?: Array<E28OrderByInput>;
  skip?: number;
  take?: number;
};
