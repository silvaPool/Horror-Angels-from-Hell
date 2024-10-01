document.addEventListener('DOMContentLoaded', function () {
    const lazyElements = document.querySelectorAll('[data-background-image]');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.style.backgroundImage = element.getAttribute('data-background-image');
          observer.unobserve(element); // Parar de observar depois de carregar a imagem
        }
      });
    });

    lazyElements.forEach(el => {
      observer.observe(el);
    });
  });