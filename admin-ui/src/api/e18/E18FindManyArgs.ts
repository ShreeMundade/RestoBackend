import { E18WhereInput } from "./E18WhereInput";
import { E18OrderByInput } from "./E18OrderByInput";

export type E18FindManyArgs = {
  where?: E18WhereInput;
  orderBy?: Array<E18OrderByInput>;
  skip?: number;
  take?: number;
};
