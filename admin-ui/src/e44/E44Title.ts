import { E44 as TE44 } from "../api/e44/E44";

export const E44_TITLE_FIELD = "id";

export const E44Title = (record: TE44): string => {
  return record.id || String(record.id);
};
