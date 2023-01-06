import { E68WhereInput } from "./E68WhereInput";
import { E68OrderByInput } from "./E68OrderByInput";

export type E68FindManyArgs = {
  where?: E68WhereInput;
  orderBy?: Array<E68OrderByInput>;
  skip?: number;
  take?: number;
};
