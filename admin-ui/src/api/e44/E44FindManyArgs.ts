import { E44WhereInput } from "./E44WhereInput";
import { E44OrderByInput } from "./E44OrderByInput";

export type E44FindManyArgs = {
  where?: E44WhereInput;
  orderBy?: Array<E44OrderByInput>;
  skip?: number;
  take?: number;
};
