import { E65WhereInput } from "./E65WhereInput";
import { E65OrderByInput } from "./E65OrderByInput";

export type E65FindManyArgs = {
  where?: E65WhereInput;
  orderBy?: Array<E65OrderByInput>;
  skip?: number;
  take?: number;
};
