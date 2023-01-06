import { E30WhereInput } from "./E30WhereInput";
import { E30OrderByInput } from "./E30OrderByInput";

export type E30FindManyArgs = {
  where?: E30WhereInput;
  orderBy?: Array<E30OrderByInput>;
  skip?: number;
  take?: number;
};
