const article = document.querySelector("article");

const sectionA = document.createElement("section");
sectionA.classList.add("home-section")
sectionA.setAttribute("id", "a");

const sectionAH1 = document.createElement("h1");
sectionAH1.textContent = "Tincho Tech Co.";

const sectionADivA = document.createElement("div");
sectionADivA.classList.add("section-div");
sectionADivA.setAttribute("id", "a");

const sectionADivAH2 = document.createElement("h2"); 
sectionADivAH2.textContent = "SOPORTE TECNICO DE PC";

const sectionADivAP = document.createElement("p");
sectionADivAP.textContent = "Mantenimiento de PC / Servicio Técnico de PC para Empresas. Atención personalizada por Analistas de Sistemas";

const sectionADivB = document.createElement("div");
sectionADivB.classList.add("section-div");
sectionADivB.setAttribute("id", "b");

const sectionAdivBP = document.createElement("p");
sectionAdivBP.textContent = "Ofrecemos soporte técnico de pc y apoyo en la informática empresarial, dando una solución integral a todos sus problemas: software, hardware, redes o virus. Las empresas que confían en nuestro servicio se benefician con la seguridad que brindamos. Amplia experiencia en ingeniería en sistemas. Disposición para proporcionar el mejor servicio.";

const sectionB = document.createElement("section");
sectionB.classList.add("home-section")
sectionB.setAttribute("id", "b"); 

const sectionBH1 = document.createElement("h1");
sectionBH1.textContent = "POR QUE CONTAR CON UN SOCIO TECNOLOGICO?";

const sectionBDivA = document.createElement("div");
sectionBDivA.classList.add("section-div");
sectionBDivA.setAttribute("id", "a");

const sectionBDivB = document.createElement("div");
sectionBDivB.classList.add("section-div");
sectionBDivB.setAttribute("id", "b");

const sectionBDivC = document.createElement("div");
sectionBDivC.classList.add("section-div");
sectionBDivC.setAttribute("id", "c");

const sectionBDivAImg = document.createElement("img");
sectionBDivAImg.src = "./assets/images/analisis.png";

const sectionBDivBImg = document.createElement("img");
sectionBDivBImg.src = "./assets/images/experience.png";

const sectionBDivCImg = document.createElement("img");
sectionBDivCImg.src = "./assets/images/el-pensamiento-de-diseno.png";

const sectionBDivAH4 = document.createElement("h4");
sectionBDivAH4.textContent = "ENFOQUE EN TU NEGOCIO";

const sectionBDivBH4 = document.createElement("h4");
sectionBDivBH4.textContent = "EXPERIENCIA Y CONOCIMIENTO";

const sectionBDivCH4 = document.createElement("h4");
sectionBDivCH4.textContent = "ASESORAMIENTO ESTRATÉGICO";

const sectionBDivAP = document.createElement("p");
sectionBDivAP.textContent = "Deja que nosotros nos encarguemos de los detalles técnicos para que puedas concentrarte en lo que mejor haces: hacer crecer tu negocio.";

const sectionBDivBP = document.createElement("p");
sectionBDivBP.textContent = "Contamos con años de experiencia en consultoría tecnológica y soluciones empresariales. Conocemos los desafíos y las oportunidades que enfrentan las empresas en el mundo digital.";

const sectionBDivCP = document.createElement("p");
sectionBDivCP.textContent = "Te ofrecemos una visión estratégica para adoptar tecnologías que impulsen tu crecimiento y competitividad en el mercado.";

export function renderHomePage() {
    article.innerHTML = '';

    sectionADivA.appendChild(sectionADivAH2);
    sectionADivA.appendChild(sectionADivAP);

    sectionADivB.appendChild(sectionAdivBP);

    sectionA.appendChild(sectionAH1);
    sectionA.appendChild(sectionADivA);
    sectionA.appendChild(sectionADivB);

    sectionBDivA.appendChild(sectionBDivAImg);
    sectionBDivA.appendChild(sectionBDivAH4);
    sectionBDivA.appendChild(sectionBDivAP);

    sectionBDivB.appendChild(sectionBDivBImg);
    sectionBDivB.appendChild(sectionBDivBH4);
    sectionBDivB.appendChild(sectionBDivBP);

    sectionBDivC.appendChild(sectionBDivCImg);
    sectionBDivC.appendChild(sectionBDivCH4);
    sectionBDivC.appendChild(sectionBDivCP);

    sectionB.appendChild(sectionBH1);
    sectionB.appendChild(sectionBDivA);
    sectionB.appendChild(sectionBDivB);
    sectionB.appendChild(sectionBDivC);

    article.appendChild(sectionA);
    article.appendChild(sectionB);
}