import { DineOrderWhereInput } from "./DineOrderWhereInput";
import { DineOrderOrderByInput } from "./DineOrderOrderByInput";

export type DineOrderFindManyArgs = {
  where?: DineOrderWhereInput;
  orderBy?: Array<DineOrderOrderByInput>;
  skip?: number;
  take?: number;
};
