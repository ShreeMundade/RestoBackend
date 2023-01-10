import { Table as TTable } from "../api/table/Table";

export const TABLE_TITLE_FIELD = "customerId";

export const TableTitle = (record: TTable): string => {
  return record.customerId || String(record.id);
};
