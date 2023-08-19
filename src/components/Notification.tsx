import { useContext } from "react"
import NotifContext, { clearNotif } from "../Context/NotificationContext"
import ErrorNotif from "./Notification/ErrorNotif"
import WarningNotif from "./Notification/WarningNotif"

const Notification = () => {
    const context = useContext(NotifContext)

    if (!context) {
        throw Error("Context must be provided for notifications")
    }

    const [notif, dispatchNotif] = context

    if (notif) {
        setTimeout(() => {
            dispatchNotif(clearNotif())
        }, 5000);

        switch (notif.class) {
            case "error":
                return <ErrorNotif message={notif.message} />
            case "warning":
                return <WarningNotif message={notif.message} />
            default:
                return null
        }
    }

    return null
}

export default Notification