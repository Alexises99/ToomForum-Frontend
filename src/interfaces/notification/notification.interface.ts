export type NotificationType = "error" | "information" | "success";

export interface NotificationProps {
  text: string;
  type: NotificationType;
}
