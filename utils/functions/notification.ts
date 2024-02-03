import { toast } from 'react-toastify';

/**
 * This function displays a toast message on the screen with the message you passed in.
 * @param type 
 * @param message 
 * @param duration 
 * @param mode 
 */
export function displayNotification(type:"success"|"warning"|"error"|"info",message:string, duration:number=3000, mode:"light"|"dark"="dark") {
    switch (type) {
        case "success":
            toast.success(`${message}`, {
                position: "top-right",
                autoClose: duration,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: mode,
                });
            break;
        case "warning":
            toast.warn(`${message}`, {
                position: "top-right",
                autoClose: duration,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: mode,
                });
            break;
        case "error":
            toast.error(`${message}`, {
                position: "top-right",
                autoClose: duration,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: mode,
                });
            break;
        case "info":
            toast.info(`${message}`, {
                position: "top-right",
                autoClose: duration,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: mode,
                });
            break;
    
        default:
            break;
    }
}