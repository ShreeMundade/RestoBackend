import { E23WhereInput } from "./E23WhereInput";
import { E23OrderByInput } from "./E23OrderByInput";

export type E23FindManyArgs = {
  where?: E23WhereInput;
  orderBy?: Array<E23OrderByInput>;
  skip?: number;
  take?: number;
};
