import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "payementType";

export const PaymentTitle = (record: TPayment): string => {
  return record.payementType || String(record.id);
};
