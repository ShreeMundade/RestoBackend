import { E15WhereInput } from "./E15WhereInput";
import { E15OrderByInput } from "./E15OrderByInput";

export type E15FindManyArgs = {
  where?: E15WhereInput;
  orderBy?: Array<E15OrderByInput>;
  skip?: number;
  take?: number;
};
