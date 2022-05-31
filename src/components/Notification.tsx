import { NotificationProps } from "../interfaces/notification/notification.interface"

const Notification = ({ text, type }: NotificationProps) => {
  const checkType = () => {
    switch (type) {
      case "error":
        return "bg-red-400"
      case "information":
        return "bg-blue-600"
      case "success":
        return "bg-green-600"
    }
  }

  const backgroundColor = checkType()

  return (
    <div
      className={`${backgroundColor} rounded-xl shadow-lg text-center py-2 text-md`}
    >
      {text}
    </div>
  )
}

export default Notification
