import s from "./Notification.module.css"

const Notification = ({ children }) => {
  return <div className={s.notification}>{children}</div>;
};
export default Notification;