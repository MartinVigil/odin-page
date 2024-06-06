import {renderHomePage} from './home.js';
import { renderServicesPage } from './services.js';

const homeBtn = document.querySelector("#home");
const servicesBtn = document.querySelector("#services");
const contactBtn = document.querySelector("#contact");

homeBtn.addEventListener("click", () => {
    renderHomePage();
})

servicesBtn.addEventListener("click", () => {
    renderServicesPage();
})

contactBtn.addEventListener("click", () => {

})

renderHomePage();