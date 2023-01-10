import { Feedback as TFeedback } from "../api/feedback/Feedback";

export const FEEDBACK_TITLE_FIELD = "itemRating";

export const FeedbackTitle = (record: TFeedback): string => {
  return record.itemRating || String(record.id);
};
