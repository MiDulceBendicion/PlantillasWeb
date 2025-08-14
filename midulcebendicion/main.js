document.addEventListener('DOMContentLoaded', () => { 
  setTimeout(() => {
    const intro = document.getElementById('intro');
    const catalogo = document.getElementById('catalogo');

    intro.classList.add('hidden');
    catalogo.classList.add('visible');
  }, 3000);
});
