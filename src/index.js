import "./style.css";
import { initUI } from "./modules/domFunctions";

initUI();

// Set default temp to Celsius in local storage (if none set yet)
(() => {
    if (!window.localStorage.temp) {
        window.localStorage.temp = 'metric'
    }
})()