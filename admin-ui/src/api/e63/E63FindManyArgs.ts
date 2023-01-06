import { E63WhereInput } from "./E63WhereInput";
import { E63OrderByInput } from "./E63OrderByInput";

export type E63FindManyArgs = {
  where?: E63WhereInput;
  orderBy?: Array<E63OrderByInput>;
  skip?: number;
  take?: number;
};
