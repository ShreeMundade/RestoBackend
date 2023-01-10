import { AdminOwner } from "../adminOwner/AdminOwner";
import { Kitchen } from "../kitchen/Kitchen";
import { Feedback } from "../feedback/Feedback";

export type Staff = {
  adminOwners?: Array<AdminOwner>;
  createdAt: Date;
  email: string | null;
  id: string;
  kitchens?: Kitchen | null;
  name: string | null;
  password: string | null;
  phone: string | null;
  rating?: Array<Feedback>;
  updatedAt: Date;
};
