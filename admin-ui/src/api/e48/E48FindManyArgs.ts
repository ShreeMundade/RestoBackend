import { E48WhereInput } from "./E48WhereInput";
import { E48OrderByInput } from "./E48OrderByInput";

export type E48FindManyArgs = {
  where?: E48WhereInput;
  orderBy?: Array<E48OrderByInput>;
  skip?: number;
  take?: number;
};
