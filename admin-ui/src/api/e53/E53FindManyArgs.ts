import { E53WhereInput } from "./E53WhereInput";
import { E53OrderByInput } from "./E53OrderByInput";

export type E53FindManyArgs = {
  where?: E53WhereInput;
  orderBy?: Array<E53OrderByInput>;
  skip?: number;
  take?: number;
};
