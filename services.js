const article = document.querySelector("article");

const sectionA = document.createElement("section");
sectionA.classList.add("services-section")
sectionA.setAttribute("id", "a");

const sectionAH1 = document.createElement("h1");
sectionAH1.textContent = "QUE SERVICIOS OFRECEMOS?"

const sectionAH2 = document.createElement("h2");
sectionAH2.textContent = "Mira todas las reparaciones que hacemos:"

const servicesContainer = document.createElement("div");
servicesContainer.classList.add("services-container");

const serviceA = document.createElement("div");
serviceA.classList.add("service");
serviceA.setAttribute("id","a");

const serviceB = document.createElement("div");
serviceB.classList.add("service");
serviceB.setAttribute("id","b");

const serviceC = document.createElement("div");
serviceC.classList.add("service");
serviceC.setAttribute("id","c");

const serviceD = document.createElement("div");
serviceD.classList.add("service");
serviceD.setAttribute("id","d");

const serviceE = document.createElement("div");
serviceE.classList.add("service");
serviceE.setAttribute("id","e");

const serviceF = document.createElement("div");
serviceF.classList.add("service");
serviceF.setAttribute("id","f");

const serviceG = document.createElement("div");
serviceG.classList.add("service");
serviceG.setAttribute("id","g");

const serviceH = document.createElement("div");
serviceH.classList.add("service");
serviceH.setAttribute("id","h");

const serviceI = document.createElement("div");
serviceI.classList.add("service");
serviceI.setAttribute("id","i");

const serviceAImg = document.createElement("img");
serviceAImg.src = "./assets/images/windows.jpg"

const serviceBImg = document.createElement("img");
serviceBImg.src = "./assets/images/servicio-tecnico-notebook.jpg";

const serviceCImg = document.createElement("img");
serviceCImg.src = "./assets/images/reparador_de_pc.jpg";

const serviceDImg = document.createElement("img");
serviceDImg.src = "./assets/images/remoto.jpg";

const serviceEImg = document.createElement("img");
serviceEImg.src = "./assets/images/seguridad.png";

const serviceFImg = document.createElement("img");
serviceFImg.src = "./assets/images/limpieza.jpg";

const serviceGImg = document.createElement("img");
serviceGImg.src = "./assets/images/malware.jpg";

const serviceHImg = document.createElement("img");
serviceHImg.src = "./assets/images/velocidad.png";

const serviceIImg = document.createElement("img");
serviceIImg.src = "./assets/images/ssd.jpg";

const serviceAH3 = document.createElement("h3");
serviceAH3.textContent = "Instalacion de Windows";

const serviceBH3 = document.createElement("h3");
serviceBH3.textContent = "Servicio Tecnico Notebook";

const serviceCH3 = document.createElement("h3");
serviceCH3.textContent = "Servicio Tecnico de PC";

const serviceDH3 = document.createElement("h3");
serviceDH3.textContent = "Soporte Tecnico de Notebooks y PC Remoto";

const serviceEH3 = document.createElement("h3");
serviceEH3.textContent = "Asesoramiento en Seguridad Informatica";

const serviceFH3 = document.createElement("h3");
serviceFH3.textContent = "Mantenimiento de PC Notebook Limpieza de PC";

const serviceGH3 = document.createElement("h3");
serviceGH3.textContent = "Eliminacion de Virus y Malware​";

const serviceHH3 = document.createElement("h3");
serviceHH3.textContent = "Aumento de Velocidad en Notebook​";

const serviceIH3 = document.createElement("h3");
serviceIH3.textContent = "Instalacion de Discos Solidos SSD​";

const serviceAP = document.createElement("p");
serviceAP.textContent = "Instalacion sistema operativo | Windows no inicia | reparacion de inicio windows.";

const serviceBP = document.createElement("p");
serviceBP.textContent = "Servicios especializados en la reparación de computador y soporte tecnico de notebook.";

const serviceCP = document.createElement("p");
serviceCP.textContent = "Servicios especializados en la reparacion de computador y soporte tecnico de PC.";

const serviceDP = document.createElement("p");
serviceDP.textContent = "Proporciona asistencia remota para resolver problemas sin necesidad de una visita fisica.";

const serviceEP = document.createElement("p");
serviceEP.textContent = "Proporciona orientacion sobre como mantener los dispositivos seguros y protegidos.";

const serviceFP = document.createElement("p");
serviceFP.textContent = "Realizacion de mantenimiento regular para prevenir problemas futuros.";

const serviceGP = document.createElement("p");
serviceGP.textContent = "Limpieza y eliminacion de software malicioso de dispositivos.";

const serviceHP = document.createElement("p");
serviceHP.textContent = "Optimización de dispositivos para aumentar su velocidad y eficiencia.";

const serviceIP = document.createElement("p");
serviceIP.textContent = "Actualización e instalación de unidades de estado solido para mejorar el rendimiento.";

export function renderServicesPage(){
    article.innerHTML = '';

    serviceA.appendChild(serviceAImg);
    serviceA.appendChild(serviceAH3);
    serviceA.appendChild(serviceAP);

    serviceB.appendChild(serviceBImg);
    serviceB.appendChild(serviceBH3);
    serviceB.appendChild(serviceBP);

    serviceC.appendChild(serviceCImg);
    serviceC.appendChild(serviceCH3);
    serviceC.appendChild(serviceCP);

    serviceD.appendChild(serviceDImg);
    serviceD.appendChild(serviceDH3);
    serviceD.appendChild(serviceDP);

    serviceE.appendChild(serviceEImg);
    serviceE.appendChild(serviceEH3);
    serviceE.appendChild(serviceEP);

    serviceF.appendChild(serviceFImg);
    serviceF.appendChild(serviceFH3);
    serviceF.appendChild(serviceFP);

    serviceG.appendChild(serviceGImg);
    serviceG.appendChild(serviceGH3);
    serviceG.appendChild(serviceGP);

    serviceH.appendChild(serviceHImg);
    serviceH.appendChild(serviceHH3);
    serviceH.appendChild(serviceHP);

    serviceI.appendChild(serviceIImg);
    serviceI.appendChild(serviceIH3);
    serviceI.appendChild(serviceIP);

    servicesContainer.appendChild(serviceA);
    servicesContainer.appendChild(serviceB);
    servicesContainer.appendChild(serviceC);
    servicesContainer.appendChild(serviceD);
    servicesContainer.appendChild(serviceE);
    servicesContainer.appendChild(serviceF);
    servicesContainer.appendChild(serviceG);
    servicesContainer.appendChild(serviceH);
    servicesContainer.appendChild(serviceI);

    sectionA.appendChild(sectionAH1);
    sectionA.appendChild(sectionAH2);
    sectionA.appendChild(servicesContainer);

    article.appendChild(sectionA);
}