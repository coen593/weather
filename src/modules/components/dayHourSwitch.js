import { makeElement } from "../utils";

const dayHourSwitch = () => {
  const container = makeElement("div", ["dh-switch-container"]);
  const dayBtn = makeElement("button", ["btn", "day-hour-switch"], "Daily", {
    id: "day-switch",
  });
  const hourBtn = makeElement("button", ["btn", "day-hour-switch"], "Hourly", {
    id: "hour-switch",
  });
  container.appendChild(dayBtn);
  container.appendChild(hourBtn);

  return container;
};

export { dayHourSwitch };
