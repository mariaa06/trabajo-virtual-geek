const activeSection = document.querySelector('.warning');
const warContent = '<h2>AVISO</h2><p>Tenga cuidado</p>';
// Si contiene la clase hidden
if (activableSection.classList.contains('.warning')) {
  // Elimina la clase
  activableSection.innerHTML = warContent;
} else { // Sino
  // Añade la clase hidden
  activableSection.classList.add('.warning');
}