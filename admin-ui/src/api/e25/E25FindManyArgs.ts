import { E25WhereInput } from "./E25WhereInput";
import { E25OrderByInput } from "./E25OrderByInput";

export type E25FindManyArgs = {
  where?: E25WhereInput;
  orderBy?: Array<E25OrderByInput>;
  skip?: number;
  take?: number;
};
