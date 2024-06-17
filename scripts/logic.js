// Navegacion por secciones a traves de teclas up y down, navegadores compatibles (Google Chrome, Mozilla Firefox, Microsoft Edge, Arc)
// Navegacion mas suave por scroll


document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todas las secciones en el documento
  const sections = document.querySelectorAll('section');
  let currentSectionIndex = 0;

  // Función para navegar a la sección especificada por el índice
  const navigateToSection = (index) => {
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave a la sección
    }
  };

  // Escucha los eventos de teclado para la navegación
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && currentSectionIndex > 0) {
      currentSectionIndex--; // Mueve hacia arriba una sección
      navigateToSection(currentSectionIndex);
    } else if (e.key === 'ArrowDown' && currentSectionIndex < sections.length - 1) {
      currentSectionIndex++; // Mueve hacia abajo una sección
      navigateToSection(currentSectionIndex);
    }
  });
});
