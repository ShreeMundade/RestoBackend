import { E31WhereInput } from "./E31WhereInput";
import { E31OrderByInput } from "./E31OrderByInput";

export type E31FindManyArgs = {
  where?: E31WhereInput;
  orderBy?: Array<E31OrderByInput>;
  skip?: number;
  take?: number;
};
