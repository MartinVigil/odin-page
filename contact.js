const article = document.querySelector("article");

const sectionA = document.createElement("section");
sectionA.classList.add("contact-section")
sectionA.setAttribute("id", "a");

const sectionAH1 = document.createElement("h1");
sectionAH1.textContent = "CONTACTANOS";

const phoneContainer = document.createElement("div");
phoneContainer.classList.add("phone-container");

const phoneContainerH3 = document.createElement("h3");
phoneContainerH3.textContent = "Numero de Telefono";

const phoneContainerP = document.createElement("p");
phoneContainerP.textContent = "+54 11 3385-1056"

const hoursContainer = document.createElement("div");
hoursContainer.classList.add("hours-container");

const hoursContainerH3 = document.createElement("h3");
hoursContainerH3.textContent = "Horarios";

const lunes = document.createElement("p");
lunes.textContent = "Lunes: 6am - 6pm";

const martes = document.createElement("p");
martes.textContent = "Martes: 6am - 6pm";

const miercoles = document.createElement("p");
miercoles.textContent = "Miercoles: 6am - 6pm";

const jueves = document.createElement("p");
jueves.textContent = "Jueves: 6am - 6pm";

const viernes = document.createElement("p");
viernes.textContent = "Viernes: 6am - 6pm";

const sabado = document.createElement("p");
sabado.textContent = "Sabado: 8am - 4pm";

const domingo = document.createElement("p");
domingo.textContent = "Domingo: 8am - 4pm";

const locationContainer = document.createElement("div");
locationContainer.classList.add("location-container")

const locationContainerH3 = document.createElement("h3");
locationContainerH3.textContent = "Direccion";

const locationContainerP = document.createElement("p");
locationContainerP.textContent = "Av. La Plata 7645, CABA"

export function renderContactPage(){
    article.innerHTML = '';

    phoneContainer.appendChild(phoneContainerH3);
    phoneContainer.appendChild(phoneContainerP);

    hoursContainer.appendChild(hoursContainerH3);
    hoursContainer.appendChild(lunes);
    hoursContainer.appendChild(martes);
    hoursContainer.appendChild(miercoles);
    hoursContainer.appendChild(jueves);
    hoursContainer.appendChild(viernes);
    hoursContainer.appendChild(sabado);
    hoursContainer.appendChild(domingo);

    locationContainer.appendChild(locationContainerH3);
    locationContainer.appendChild(locationContainerP);

    sectionA.appendChild(sectionAH1);
    sectionA.appendChild(phoneContainer);
    sectionA.appendChild(hoursContainer);
    sectionA.appendChild(locationContainer);

    article.appendChild(sectionA);
}