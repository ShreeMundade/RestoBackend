import { E43WhereInput } from "./E43WhereInput";
import { E43OrderByInput } from "./E43OrderByInput";

export type E43FindManyArgs = {
  where?: E43WhereInput;
  orderBy?: Array<E43OrderByInput>;
  skip?: number;
  take?: number;
};
