    const textDiv = document.getElementById('textDiv');
    const textArea = document.getElementById('textArea');

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'e') {
            event.preventDefault();
            textArea.value = textDiv.textContent;
            textDiv.style.display = 'none';
            textArea.style.display = 'block';
            textArea.focus();
        } else if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            textDiv.textContent = textArea.value;
            textArea.style.display = 'none';
            textDiv.style.display = 'block';
            textDiv.focus();
        }
    });

    // Підтримка фокуса для div, щоб можна було легко повернутись до редагування
    textDiv.addEventListener('focus', function() {
        document.addEventListener('keydown', handleKeyDown);
    });

    textDiv.addEventListener('blur', function() {
        document.removeEventListener('keydown', handleKeyDown);
    });

    function handleKeyDown(event) {
        if (event.ctrlKey && event.key === 'e') {
            event.preventDefault();
            textArea.value = textDiv.textContent;
            textDiv.style.display = 'none';
            textArea.style.display = 'block';
            textArea.focus();
        } else if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            textDiv.textContent = textArea.value;
            textArea.style.display = 'none';
            textDiv.style.display = 'block';
            textDiv.focus();
        }
    }