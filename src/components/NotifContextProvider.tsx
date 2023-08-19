import { useReducer } from "react";
import NotifContext, { notifReducer } from "../Context/NotificationContext";

const NotifContextProvider = ({ children }: { children: JSX.Element }) => {
    const [notification, notifDispatch] = useReducer(notifReducer, null)

    return (
        <NotifContext.Provider value={[notification, notifDispatch]}>
            {children}
        </NotifContext.Provider>
    )
}

export default NotifContextProvider
