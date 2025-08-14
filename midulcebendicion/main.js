document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    // Ocultar intro
    document.getElementById('intro').style.display = 'none';

    // Mostrar encabezado y catálogo
    document.querySelector('.encabezado').classList.remove('oculto');
    document.getElementById('catalogo').classList.remove('oculto');
  }, 3000); // 3 segundos de presentación
});
