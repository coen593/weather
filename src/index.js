import "./style.css";
import { makeElement } from "./modules/utils";
import { handlePermission } from "./modules/apiFunctions";

// Initialize app
(() => {
  const container = makeElement("div", ["container"]);
  document.body.appendChild(container);

  if (!window.localStorage.temp) {
    window.localStorage.temp = "metric";
  }
})();

handlePermission();
