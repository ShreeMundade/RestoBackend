import { E61WhereInput } from "./E61WhereInput";
import { E61OrderByInput } from "./E61OrderByInput";

export type E61FindManyArgs = {
  where?: E61WhereInput;
  orderBy?: Array<E61OrderByInput>;
  skip?: number;
  take?: number;
};
