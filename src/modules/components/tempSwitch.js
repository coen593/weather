import { makeElement } from "../utils";

const tempSwitch = () => {
    const div = makeElement('div',['temp-switches'])
    const fahrenheit = makeElement('span',['switch', 'metric'], 'Switch to Imperial', {
        'tab-index': '0',
        'id': 'fahrenheit-switch'
    })
    const celsius = makeElement('span',['switch', 'imperial'], 'Switch to Metric', {
        'tab-index': '0',
        'id': 'celsius-switch'
    })

    div.appendChild(fahrenheit)
    div.appendChild(celsius)

    return div
}

export { tempSwitch }