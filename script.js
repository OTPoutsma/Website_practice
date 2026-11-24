// Menu: op breed scherm altijd open, op smal scherm dicht na een klik op een link.
(function () {
  var menu = document.querySelector('.nav__menu');
  if (!menu) return;
  var breed = window.matchMedia('(min-width: 900px)');

  function zet() { menu.open = breed.matches; }
  zet();
  if (breed.addEventListener) breed.addEventListener('change', zet);

  menu.addEventListener('click', function (e) {
    if (e.target.closest('a') && !breed.matches) menu.open = false;
  });
})();
