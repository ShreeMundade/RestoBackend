import { Parcel as TParcel } from "../api/parcel/Parcel";

export const PARCEL_TITLE_FIELD = "customerId";

export const ParcelTitle = (record: TParcel): string => {
  return record.customerId || String(record.id);
};
