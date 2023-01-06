import { E8WhereInput } from "./E8WhereInput";
import { E8OrderByInput } from "./E8OrderByInput";

export type E8FindManyArgs = {
  where?: E8WhereInput;
  orderBy?: Array<E8OrderByInput>;
  skip?: number;
  take?: number;
};
