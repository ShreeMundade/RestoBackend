import { KitchenWhereInput } from "./KitchenWhereInput";
import { KitchenOrderByInput } from "./KitchenOrderByInput";

export type KitchenFindManyArgs = {
  where?: KitchenWhereInput;
  orderBy?: Array<KitchenOrderByInput>;
  skip?: number;
  take?: number;
};
