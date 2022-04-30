import { makeElement } from "./utils";
import { getWeatherAtLocation } from "./apiFunctions";

const contentContainer = () => {
    const body = document.querySelector('body')
    const container = makeElement("div", ["container"]);
    body.appendChild(container);
    return container
};

const submitSearch = form => {
    const formData = new FormData(form)
    getWeatherAtLocation(formData.get('loc-input'))
}

const createSearchBox = () => {
    const form = makeElement('form',['search-form'])
    const legend = makeElement('legend',null,'Enter the city you are searching for')
    const label = makeElement('label',null,'Location',{'for': 'loc-input'})
    const input = makeElement('input',null,null,{'id':'loc-input','name':'loc-input','type':'text'})
    const button = makeElement('button',['btn'], 'Go', {'type':'submit'})
    form.appendChild(legend)
    form.appendChild(label)
    form.appendChild(input)
    form.appendChild(button)
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        submitSearch(this)
    })
    return form
}

const initUI = () => {
    const container = contentContainer()
    container.appendChild(createSearchBox())
}

export {
    initUI
}