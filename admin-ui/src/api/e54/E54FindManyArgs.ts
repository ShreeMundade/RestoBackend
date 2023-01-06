import { E54WhereInput } from "./E54WhereInput";
import { E54OrderByInput } from "./E54OrderByInput";

export type E54FindManyArgs = {
  where?: E54WhereInput;
  orderBy?: Array<E54OrderByInput>;
  skip?: number;
  take?: number;
};
