import { AdminOwner as TAdminOwner } from "../api/adminOwner/AdminOwner";

export const ADMINOWNER_TITLE_FIELD = "address";

export const AdminOwnerTitle = (record: TAdminOwner): string => {
  return record.address || String(record.id);
};
