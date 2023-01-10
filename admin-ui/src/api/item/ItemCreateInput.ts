import { AdminOwnerWhereUniqueInput } from "../adminOwner/AdminOwnerWhereUniqueInput";
import { DineOrderWhereUniqueInput } from "../dineOrder/DineOrderWhereUniqueInput";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type ItemCreateInput = {
  adminOwners?: AdminOwnerWhereUniqueInput | null;
  catagory?: Array<
    | "Chinese"
    | "Japanese"
    | "Italian"
    | "SouthIndian"
    | "Indian"
    | "Soups"
    | "Starter"
  >;
  description?: string | null;
  dineOrder?: DineOrderWhereUniqueInput | null;
  itemName: string;
  price: number;
  quantity?: number | null;
  tables?: TableWhereUniqueInput | null;
};
