import { E32WhereInput } from "./E32WhereInput";
import { E32OrderByInput } from "./E32OrderByInput";

export type E32FindManyArgs = {
  where?: E32WhereInput;
  orderBy?: Array<E32OrderByInput>;
  skip?: number;
  take?: number;
};
