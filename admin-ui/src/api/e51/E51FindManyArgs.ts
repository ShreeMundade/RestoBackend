import { E51WhereInput } from "./E51WhereInput";
import { E51OrderByInput } from "./E51OrderByInput";

export type E51FindManyArgs = {
  where?: E51WhereInput;
  orderBy?: Array<E51OrderByInput>;
  skip?: number;
  take?: number;
};
