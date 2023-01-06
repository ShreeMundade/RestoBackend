import { E41WhereInput } from "./E41WhereInput";
import { E41OrderByInput } from "./E41OrderByInput";

export type E41FindManyArgs = {
  where?: E41WhereInput;
  orderBy?: Array<E41OrderByInput>;
  skip?: number;
  take?: number;
};
