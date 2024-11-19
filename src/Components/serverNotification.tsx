import React from "react";

interface NotificationProps {
  message: string;
  type: "success" | "error";
}

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
  const colors =
    type === "success"
      ? "bg-green-500 text-white"
      : "bg-red-500 text-white";

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg ${colors}`}>
      {message}
    </div>
  );
};

export default Notification;
