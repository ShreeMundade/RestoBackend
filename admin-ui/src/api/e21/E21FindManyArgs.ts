import { E21WhereInput } from "./E21WhereInput";
import { E21OrderByInput } from "./E21OrderByInput";

export type E21FindManyArgs = {
  where?: E21WhereInput;
  orderBy?: Array<E21OrderByInput>;
  skip?: number;
  take?: number;
};
