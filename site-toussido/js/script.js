// Menu mobile
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Visionneuse : clic sur une image avec la classe "zoom" pour l'agrandir
  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', 'Image agrandie');
  box.innerHTML = '<button type="button">Fermer</button><img alt="">';
  document.body.appendChild(box);
  var big = box.querySelector('img');

  function close() { box.classList.remove('open'); }
  document.querySelectorAll('img.zoom').forEach(function (img) {
    img.setAttribute('tabindex', '0');
    function show() { big.src = img.src; big.alt = img.alt; box.classList.add('open'); }
    img.addEventListener('click', show);
    img.addEventListener('keydown', function (e) { if (e.key === 'Enter') show(); });
  });
  box.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
