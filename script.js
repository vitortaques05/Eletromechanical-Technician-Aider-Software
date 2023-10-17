
const swiper = new Swiper('.swiper-container', {
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// Adicione aqui um código JavaScript para lidar com os botões do menu.
const menuPrincipalButton = document.getElementById('menu-principal');
const sobreNosButton = document.getElementById('sobre-nos');

menuPrincipalButton.addEventListener('click', function() {
  // Redirecione para o menu principal (index.html)
  window.location.href = 'index.html';
});

sobreNosButton.addEventListener('click', function() {
  // Redirecione para o menu principal (index.html)
  window.location.href = 'sobrenos.html';
});



