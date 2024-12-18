
// Variables de estado para activar/desactivar funcionalidades
let largeText = false;
let contrast = false;
let intelligentContrast = false;
let highlightedLinks = false;
let textSizeIncreased = false;
let textSpacingIncreased = false;

const synth = window.speechSynthesis;
let isReading = false;
let currentUtterance = null;
let readPageEnabled = true; // Estado de habilitación de la lectura de la página

function toggleAccessibilityMenu() {
    const accessibilityMenu = document.getElementById('accessibility-menu');
    accessibilityMenu.style.display = accessibilityMenu.style.display === 'none' || accessibilityMenu.style.display === '' ? 'block' : 'none';
}

function toggleLargeText() {
    largeText = !largeText;
    document.body.style.fontSize = largeText ? '22px' : '';
    document.getElementById('toggle-large-text').textContent = largeText ? 'Desactivar XL Widget' : 'Activar XL Widget de gran tamaño';
}

function toggleReadPage() {
    if (readPageEnabled) {
        if (isReading) {
            stopReading();
        } else {
            startReading();
        }
    }
}

function startReading() {
    const pageText = document.body.innerText;
    currentUtterance = new SpeechSynthesisUtterance(pageText);
    synth.speak(currentUtterance);
    isReading = true;
    document.getElementById('toggle-read-page').textContent = 'Detener lectura';
}

function stopReading() {
    if (currentUtterance) {
        synth.cancel();
        isReading = false;
        document.getElementById('toggle-read-page').textContent = 'Leer página';
    }
}

function toggleContrast() {
    contrast = !contrast;
    document.body.style.backgroundColor = contrast ? '#000' : '';
    document.body.style.color = contrast ? '#FFF' : '';
    document.getElementById('toggle-contrast').textContent = contrast ? 'Contraste -' : 'Contraste +';
}

function toggleIntelligentContrast() {
    intelligentContrast = !intelligentContrast;
    if (intelligentContrast) {
        document.body.style.filter = 'invert(1) contrast(200%)';
    } else {
        document.body.style.filter = '';
    }
    document.getElementById('toggle-intelligent-contrast').textContent = intelligentContrast ? 'Desactivar contraste inteligente' : 'Contraste inteligente';
}

function toggleHighlightLinks() {
    highlightedLinks = !highlightedLinks;
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.backgroundColor = highlightedLinks ? 'yellow' : '';
    });
    document.getElementById('toggle-highlight-links').textContent = highlightedLinks ? 'Desmarcar enlaces' : 'Resaltar enlaces';
}

function toggleIncreaseTextSize() {
    textSizeIncreased = !textSizeIncreased;
    document.body.style.fontSize = textSizeIncreased ? '18px' : '';
    document.getElementById('toggle-increase-text-size').textContent = textSizeIncreased ? 'Reducir tamaño del texto' : 'Agrandar texto';
}

function toggleAdjustTextSpacing() {
    textSpacingIncreased = !textSpacingIncreased;
    document.body.style.lineHeight = textSpacingIncreased ? '1.8' : '';
    document.getElementById('toggle-adjust-text-spacing').textContent = textSpacingIncreased ? 'Reducir espacio entre texto' : 'Espaciado de texto';
}

