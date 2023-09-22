// Cette fonction permet d'ouvrir l'onglet par défaut (l'onglet 1 au chargement de la page)
function openDefaultTab() {
  openTab("tab1");
}

// Fonction pour ouvrir un onglet spécifique
function openTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none"; // Masque tous les contenus d'onglet
  }

  const tab = document.getElementById(tabId);
  if (tab) {
    tab.style.display = "flex"; // Affiche l'onglet actif en display: flex
  }

  // Définir la classe "active" pour mettre en évidence l'onglet actif
  const tablinks = document.querySelectorAll(".tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  const activeTablink = document.querySelector(
    "[onclick=\"openTab('" + tabId + "')\"]"
  );
  if (activeTablink) {
    activeTablink.classList.add("active");
  }
}

// Appel de la fonction pour ouvrir l'onglet par défaut au chargement de la page
openDefaultTab();

//-------------------
//Menu Burger

const menuToggle = document.getElementById("menu-toggle");
const menuList = document.getElementById("menu-list");

menuToggle.addEventListener("click", () => {
  menuList.classList.toggle("menu-open");
});

// Fermer le menu lorsque l'utilisateur clique en dehors de celui-ci

document.addEventListener("click", (e) => {
  if (!menuList.contains(e.target) && !menuToggle.contains(e.target)) {
    menuList.classList.remove("menu-open");
  }
});

// pour infos mode responsive footer
const adress = document.querySelector(".fa-house");
const phone = document.querySelector(".fa-phone");
const openDay = document.querySelector(".fa-clock");
const appointment = document.querySelector(".fa-calendar-days");
const addAdress = document.querySelector(".addAdress");
const addPhone = document.querySelector(".addPhone");
const addClock = document.querySelector(".addClock");
const addRdv = document.querySelector(".addRdv");

adress.addEventListener("click", () => {
  addAdress.classList.toggle("open");
});

phone.addEventListener("click", () => {
  addPhone.classList.toggle("open");
});

openDay.addEventListener("click", () => {
  addClock.classList.toggle("open");
});

appointment.addEventListener("click", () => {
  addRdv.classList.toggle("open");
});

// Fermer la bulle lorsque l'utilisateur clique en dehors de celui-ci

document.addEventListener("click", (e) => {
  if (!adress.contains(e.target) && !addAdress.contains(e.target)) {
    addAdress.classList.remove("open");
  }
});

document.addEventListener("click", (e) => {
  if (!phone.contains(e.target) && !addPhone.contains(e.target)) {
    addPhone.classList.remove("open");
  }
});

document.addEventListener("click", (e) => {
  if (!openDay.contains(e.target) && !addClock.contains(e.target)) {
    addClock.classList.remove("open");
  }
});

document.addEventListener("click", (e) => {
  if (!appointment.contains(e.target) && !addRdv.contains(e.target)) {
    addRdv.classList.remove("open");
  }
});
