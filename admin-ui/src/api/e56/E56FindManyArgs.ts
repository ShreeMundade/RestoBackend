import { E56WhereInput } from "./E56WhereInput";
import { E56OrderByInput } from "./E56OrderByInput";

export type E56FindManyArgs = {
  where?: E56WhereInput;
  orderBy?: Array<E56OrderByInput>;
  skip?: number;
  take?: number;
};
