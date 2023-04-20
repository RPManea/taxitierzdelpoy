// Obtener el aviso de cookies y los botones
const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-btn');
const moreInfoBtn = document.getElementById('more-info-btn');

// Función para mostrar el aviso de cookies
function showCookieBanner() {
  cookieBanner.classList.remove('hidden');
}

// Función para ocultar el aviso de cookies
function hideCookieBanner() {
  cookieBanner.classList.add('hidden');
}

// Función para manejar el clic en el botón "Aceptar"
function handleAcceptClick() {
  // Ocultar el aviso de cookies
  hideCookieBanner();

  // Almacenar la información de que el usuario ha aceptado las cookies
  localStorage.setItem('cookiesAccepted', 'true');
}

// Función para manejar el clic en el botón "Más información"
function handleMoreInfoClick() {
  // Aquí podrías abrir una página con más información sobre las cookies
}

// Comprobar si el usuario ya ha aceptado las cookies
const cookiesAccepted = localStorage.getItem('cookiesAccepted');

if (cookiesAccepted === 'true') {
  // El usuario ya ha aceptado las cookies, no es necesario mostrar el aviso de cookies
  hideCookieBanner();
} else {
  // El usuario aún no ha aceptado las cookies, mostrar el aviso de cookies
  showCookieBanner();
}

// Agregar manejadores de eventos para los botones
acceptBtn.addEventListener('click', handleAcceptClick);
moreInfoBtn.addEventListener('click', handleMoreInfoClick);

