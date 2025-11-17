document.getElementById('btnhtml').addEventListener('click', function() {
    openValidator('html');
});

document.getElementById('btncss').addEventListener('click', function() {
    openValidator('css');
});

function openValidator(type) {
    const url = document.getElementById('urlInput').value;

    if (!url || url.indexOf('http') !== 0) {
        alert('Por favor, introduce una URL válida (incluyendo https://).');
        return;
    }

    let validatorUrl;
    
    // Construir la URL del validador. Se usa encodeURIComponent para manejar caracteres especiales.
    if (type === 'html') {
        validatorUrl = `https://validator.w3.org/nu/?doc=${encodeURIComponent(url)}`;
    } else if (type === 'css') {
        validatorUrl = `https://jigsaw.w3.org/css-validator/validator?uri=${encodeURIComponent(url)}&profile=css3&usermedium=all&output=html`;
    }
    
    // Abrir la URL en una nueva pestaÃ±a
    window.open(validatorUrl, '_blank');
}