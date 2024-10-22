document.addEventListener('DOMContentLoaded', function () {
  const lazyElements = document.querySelectorAll('[data-background-image]');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        // Certifique-se de que o valor atribuído ao background-image esteja no formato correto
        const backgroundImage = element.getAttribute('data-background-image');
        element.style.backgroundImage = backgroundImage;
        observer.unobserve(element); // Parar de observar depois de carregar a imagem
      }
    });
  });

  lazyElements.forEach(el => {
    observer.observe(el);
  });
});
