import { E46WhereInput } from "./E46WhereInput";
import { E46OrderByInput } from "./E46OrderByInput";

export type E46FindManyArgs = {
  where?: E46WhereInput;
  orderBy?: Array<E46OrderByInput>;
  skip?: number;
  take?: number;
};
