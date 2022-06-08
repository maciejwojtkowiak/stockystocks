import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";

const Notification = () => {
  const notificationIsShown = useSelector(
    (state: RootState) => state.notification.isShown
  );
  const notificationMessage = useSelector(
    (state: RootState) => state.notification.message
  );
  return (
    <div className="fixed top-10 right-10 bg-red-500 z-10">
      {notificationIsShown && <h1>{notificationMessage}</h1>}
    </div>
  );
};

export default Notification;
