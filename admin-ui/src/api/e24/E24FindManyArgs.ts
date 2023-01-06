import { E24WhereInput } from "./E24WhereInput";
import { E24OrderByInput } from "./E24OrderByInput";

export type E24FindManyArgs = {
  where?: E24WhereInput;
  orderBy?: Array<E24OrderByInput>;
  skip?: number;
  take?: number;
};
