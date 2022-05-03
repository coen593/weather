import { makeElement } from "../utils";
import { getWeatherAtLocation } from "../apiFunctions";
import Icon from "./assets/search-black.svg";

const submitSearch = (form) => {
  const formData = new FormData(form);
  getWeatherAtLocation(formData.get("loc-input"));
};

const searchBox = () => {
  const form = makeElement("form", ["search-form"]);
  const label = makeElement("label", ["search-label"], "Search location", {
    for: "loc-input",
  });
  const input = makeElement("input", ["search-input"], null, {
    placeholder: " ",
    id: "loc-input",
    name: "loc-input",
    type: "text",
  });
  const button = makeElement("button", ["search-btn"], null, {
    type: "submit",
  });
  const icon = new Image();
  icon.src = Icon;
  button.appendChild(icon);
  form.appendChild(input);
  form.appendChild(label);
  form.appendChild(button);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    submitSearch(this);
  });
  return form;
};

export { searchBox };
