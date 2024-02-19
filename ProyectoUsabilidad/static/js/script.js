// Obtener una NodeList de todos los elementos con la clase "filtro-enlace"
let enlacesFiltro = document.querySelectorAll('.filtro-enlace');

// Agregar un EventListener a cada enlace de filtro
enlacesFiltro.forEach(function(enlace) {
  enlace.addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del hipervínculo por si acaso
    event.preventDefault();

    // Obtener el valor del atributo de datos "filtro"
    let filtro = enlace.getAttribute('data-filtro');

    // Motrar el elemento accesorio y luego solo los elementos con la clase correspondiente
    document.querySelectorAll('.articulos-popular-items li').forEach(function(item) {
      if (item.classList.contains('enlace-accesory-pick') || item.classList.contains(filtro + '-item')) {
        item.style.display = "list-item";
      } else {
        item.style.display = "none";
      }
    });
  });
});