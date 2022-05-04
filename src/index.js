import "./style.css";
import { initUI } from "./modules/domFunctions";
import { handlePermission } from "./modules/apiFunctions"

initUI();

// Set default temp to Celsius in local storage (if none set yet)
(() => {
    if (!window.localStorage.temp) {
        window.localStorage.temp = 'metric'
    }
})()

handlePermission()